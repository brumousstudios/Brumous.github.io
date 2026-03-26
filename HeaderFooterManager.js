class SpecialHeader extends HTMLElement {
    ConnectedCallback(){
        this.innerHTML=`
        
    `
    }
}

class SpecialFooter extends HTMLElement {
    ConnectedCallback(){
        this.innerHTML=`
         <footer class="footer">
            <p>Brumous Studios © 2026</p>
            <div class="footer-links">
                <a href="#">Youtube</a>  |  
                <a href="#">Twitter / X</a>
            </div>
        </footer>
    `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)