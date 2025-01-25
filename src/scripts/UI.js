export const UI = {
    createElement(tag, attributes = {}, children = []) {
        const element = document.createElement(tag);

        for (let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }

        if (!Array.isArray(children)) {
            children = [children];  
        }

        children.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));  
            } else if (child instanceof Node) {
                element.appendChild(child); 
            }
        });

        return element;
    },

    render(element, container) {
        container.appendChild(element);
    }
};
