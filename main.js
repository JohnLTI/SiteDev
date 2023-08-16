class Calculadora {
    constructor(previousTextElement, currentTextElement) {
        this.previousTextElement = previousTextElement
        this.currentTextElement = currentTextElement
        this.clear()
    }
    clear() {
        this.current = ''
        this.previous = ''
        this.operação = undefined
    }
    delete() {
        this.current = this.current.toString().slice(0, -1)
    }
    appendNumero(numero) {
        if (numero === ',' && this.current.includes('.')) return;
        this.current = this.current.toString() + numero.toString()
    }
    EscolhaOperação(operação) {
        if (this.current === '') return
        if (this.previous !== '') {
            this.compute()
        }
        this.operação = operação
        this.previous = this.current
        this.current = ''
    }
    compute() {
        let computation
        const prev = parseFloat(this.previous)
        const current = parseFloat(this.current)
        if (isNaN(prev) || isNaN(current)) return

        switch (this.operação) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
        }
        this.current = computation.toString()
        this.operação = undefined
        this.previous = ''
    }
}