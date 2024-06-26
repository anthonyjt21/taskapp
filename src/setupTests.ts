import '@testing-library/jest-dom/extend-expect';
import Modal from 'react-modal';

// Create a div element with id 'root' and append it to the body
const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

// Set the app element for react-modal
Modal.setAppElement('#root');
