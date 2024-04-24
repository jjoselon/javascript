class Button extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style>
                #btnMain {
                    padding: 0px 15px;
                }
                p {
                    color: red;
                }
            </style>
            <button id='btnMain'>Show</button>
            <p style='display:none;'>
                <slot>More infos!</slot>
            </p>
        `;
    }

    connectedCallback() {
        this.shadowRoot.getElementById('btnMain').addEventListener('click', (e) => {
            const pTag = this.shadowRoot.querySelector('p')
            const styleDisplay = pTag.style.display;
            debugger;
            switch (styleDisplay) {
                case 'block': {
                    pTag.style.display = 'none'
                    this.shadowRoot.querySelector('button').textContent = 'Show';
                    break;
                }
                case 'none': {
                    pTag.style.display = 'block';
                    this.shadowRoot.querySelector('button').textContent = 'Hide';
                    break;
                }  
            }            
        })
    }
}

customElements.define('gs-button', Button)