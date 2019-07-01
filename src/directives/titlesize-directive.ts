import { DirectiveOptions } from 'vue'

const directive: DirectiveOptions = {
    inserted(el, node) {
        el.style.fontSize = node.value
    }
}

export default directive