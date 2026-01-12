document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('.terminal-body');
    const prompt = document.querySelector('.prompt');
    let input = '';

    document.addEventListener('keydown', (e) => {
        if (e.key.length === 1) { // Printable chars
            input += e.key;
            updatePrompt();
        } else if (e.key === 'Backspace') {
            input = input.slice(0, -1);
            updatePrompt();
        } else if (e.key === 'Enter') {
            processCommand(input);
            input = '';
            updatePrompt();
        }
    });

    function updatePrompt() {
        prompt.textContent = `yourname@portfolio:~$ ${input}_`;
    }

    function processCommand(cmd) {
        const output = document.createElement('p');
        output.textContent = `> ${cmd}`; // Echo input
        body.insertBefore(output, prompt);

        let response;
        switch (cmd.trim()) {
            case 'help':
                response = 'Available commands: about, skills, projects, contact';
                break;
            case 'about':
                response = 'Backend engineer...'; // Pull from template or fetch via AJAX
                break;
            // Add more cases
            default:
                response = 'Command not found. Try "help".';
        }
        const respElem = document.createElement('p');
        respElem.textContent = response;
        body.insertBefore(respElem, prompt);
        body.scrollTop = body.scrollHeight; // Scroll to bottom
    }
});