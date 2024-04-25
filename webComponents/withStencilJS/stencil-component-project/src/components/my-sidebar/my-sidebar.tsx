import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'my-sidebar',
    styleUrl: 'my-sidebar.css',
    shadow: true
})
export class MySidebar {
    
    /* 
        If we wanted to reflect changes to the props, to the attribute, 
        we can configure prop here by passing 'reflect' option 
    */
    @Prop({reflect: true}) title: string;

    render() {
       return (
            <aside>
                <header>
                    <h1>{this.title}</h1>
                </header>
                <slot/>
            </aside>
        );
    }
}