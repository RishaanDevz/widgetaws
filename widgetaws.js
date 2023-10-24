// Create a <link> element for Google Fonts
const linkElement = document.createElement('link');
linkElement.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
linkElement.rel = 'stylesheet';

// Append the <link> element to the widget's <head>
document.head.appendChild(linkElement);

// Widget styles
const styles = `
    <style>
        .i {
            font-size: 40px;
            font-family: 'Material Icons';
        }

        .circle-button {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #685438;
            border: none;
            color: white;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: none;
            position: fixed;
            bottom: 80px;
            right: 20px;
            transition: opacity 0.3s;
            opacity: 1;
        }

        .circle-button:hover {
            background-color: #ba9f77;
            transition: background-color 0.5s ease-in-out;
        }

        .circle-button:not(:hover) .i {
            opacity: 1;
        }

        .iframe-container {
            position: fixed;
            bottom: 400px;
            right: 230px;
            transform: translate(50%, 50%);
            background-color: transparent;
            width: 400px;
            height: 500px;
            box-shadow: 20px 30px 20px rgba(0, 0, 0, 0.5);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s, visibility 0s 0.3s;
            z-index: 10000;
            border-radius: 10px; /* Add rounded corners to the iframe container */
            border: none; /* Remove the border from the iframe container */
        }

        iframe {
            width: 100%;
            height: 100%;
            border-radius: 10px; /* Add rounded corners to the iframe */
            border: none; /* Remove the border from the iframe */
        }

        .iframe-container.open {
            opacity: 1;
            visibility: visible;
            transition: opacity 0.5s;
        }
    </style>
`;

// Widget HTML
const widgetHTML = `
    <div class="circle-button" id="widget-button">
        <span class="i">support_agent</span>
    </div>
    <div class="iframe-container" id="iframe-container">
        <iframe src="http://54.71.91.20:3000/"></iframe>
    </div>
`;

// Append styles and HTML to the document
const widgetContainer = document.createElement('div');
widgetContainer.innerHTML = styles + widgetHTML;
document.body.appendChild(widgetContainer);

// Widget logic
const button = document.getElementById('widget-button');
const iframeContainer = document.getElementById('iframe-container');
let isOpen = false; // Initial state (changed to closed)

button.addEventListener('click', () => {
    isOpen = !isOpen; // Toggle the state

    if (isOpen) {
        // Change the icon to "support_agent" when open
        button.innerHTML = '<span class="i">close</span>';
    } else {
        // Change the icon to "close" when closed
        button.innerHTML = '<span class="i">support_agent</span>';
    }

    iframeContainer.classList.toggle('open');
});

// Check if it's on the home page and open the iframe by default
if (window.location.pathname === '/') {
    iframeContainer.classList.add('open');
    isOpen = true; // Change the initial state to open
    button.innerHTML = '<span class="i">close</span>'; // Set the initial icon to "support_agent"
}
