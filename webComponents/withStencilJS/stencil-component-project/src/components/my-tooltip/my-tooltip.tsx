import { Component, Prop, State, h } from "@stencil/core";

@Component({
    tag: 'my-tooltip',
    styleUrl: 'my-tooltip.css',
    shadow: true
})
export class MyTooltip {

    @Prop({reflect: true})
    text: string;

    @State()
    tooltipHidden: boolean = true;

    toggleTooltip() {
        this.tooltipHidden = !this.tooltipHidden;
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="username"/>
                <div id="anim">
                    <span class={this.tooltipHidden ? 'tooltip' : 'tooltip shown'} data-tooltip={this.text} onClick={this.toggleTooltip.bind(this)}><slot/></span>
                </div>
            </form>
        );
    }
}