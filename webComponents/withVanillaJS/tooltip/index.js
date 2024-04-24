class Tooltip extends HTMLElement {

    _tooltipContainer;
    _tooltipText;

    constructor() {
        super();
        this.attachShadow({mode: 'open'}); // Creates a shadow root for element and returns it.
        this.shadowRoot.innerHTML = `
            <span>(?)</span>
            <slot>Nothing here</slot>
        `;
    }
    
    connectedCallback() {
        console.info("connectedCallback is invoked!")
        /*
        Called each time the element is added to the document. The specification
        recommends that, as far as possible, developers should implement custom element setup
        in this callback rather than the constructor
        */
       this._tooltipText = this.getAttribute('text') || 'Default text';
       const tooltipIcon = this.shadowRoot.querySelector('span');
       tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
       tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    //    this.shadowRoot.appendChild(tooltipIcon);
       this.style.position = 'relative';

    }

    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._tooltipText;
        this._tooltipContainer.style.color = 'white';
        this._tooltipContainer.style.backgroundColor = 'black';
        this._tooltipContainer.style.position = 'absolute';
        this._tooltipContainer.style.zIndex = '10';
        this.shadowRoot.appendChild(this._tooltipContainer);
    }

    _hideTooltip() {
        this.shadowRoot.removeChild(this._tooltipContainer);
    }

}

customElements.define('gs-tooltip', Tooltip)