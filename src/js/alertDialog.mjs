const alertsignupUrl = '/json/alertSignup.json';

export default class AlertSignup {
    constructor() {
        this.alerts = [];
        this.loadAlerts();
    }

    async loadAlerts() {
        try {
            const response = await fetch(alertsignupUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch alerts');
            }
            this.alerts = await response.json();
            this.displayAlerts();
        } catch (error) {
            console.error('Error loading alerts:', error);
        }
    }

    displayAlerts() {
      // Check if the alert has already been shown
    const alertShown = localStorage.getItem('alertShown');

      // If it has not been shown, proceed to display the alert
      if (!alertShown && this.alerts.length > 0) {
        
          setTimeout(() => {
            const alertSection = document.createElement('section');
            alertSection.classList.add('alert-list-msg');

            this.alerts.forEach(alert => {
                const alertMessage = document.createElement('p');
                alertMessage.textContent = alert.message;
                alertMessage.style.color = '#333';
                alertMessage.style.padding = '20px';
                alertMessage.style.position = 'relative';
                alertMessage.style.borderRadius = '8px';
                alertMessage.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                alertMessage.style.textAlign = 'center';
                alertMessage.style.width = '400px';
                alertMessage.style.overlay = 'width(100%) height(100%) z-index(2) background-color(rgba(0, 0, 0, 0.5)';
 
                const closeButton = document.createElement('span');
                closeButton.textContent = ' ×';
                closeButton.style.cursor = 'pointer';
                closeButton.style.position = 'absolute';
                closeButton.style.right = '10px';
                closeButton.style.top = '10%';
                closeButton.style.transform = 'translateY(-50%)';
                closeButton.style.color = alert.color;

                closeButton.addEventListener('click', () => {
                    alertSection.removeChild(alertMessage);
                    if (alertMessage.parentNode) {
                        alertMessage.parentNode.removeChild(alertMessage);
                    }
                });// Click Me button

                const clickMeButton = document.createElement('button');
                clickMeButton.textContent = 'Sign Up';
                clickMeButton.style.marginLeft = '10px'; 
                clickMeButton.style.backgroundColor = 'darkblue';
                clickMeButton.style.color = 'white';
                clickMeButton.style.border = 'none';
                clickMeButton.style.borderRadius = '5px';
                clickMeButton.style.padding = '5px 10px';
                clickMeButton.style.cursor = 'pointer';

                // Add click event to the "Click Me" button
                clickMeButton.addEventListener('click', () => {
                  window.location.href = 'signup.html';
                });

                // Append buttons to the alert message
               
                
                alertMessage.appendChild(clickMeButton);
                alertMessage.appendChild(closeButton);
                alertSection.appendChild(alertMessage);
            });

            /*const mainElement = document.querySelector('main');
            mainElement.prepend(alertSection);*/
            // Select the hero section and prepend the alert section to it
            const heroElement = document.querySelector('.hero'); // Adjust selector as needed
            if (heroElement) {
                alertSection.style.position = 'absolute'; // Position the alert section absolutely
                alertSection.style.top = '50px'; // Adjust as necessary
                alertSection.style.left = '50%'; // Center horizontally
                alertSection.style.transform = 'translateX(-50%)'; // Offset for centering

                heroElement.style.position = 'relative'; // Make sure hero is positioned relative
                heroElement.appendChild(alertSection);
            }
        }, 1000);
      }  
    }
}