class tanah{
    constructor(widht, height, color){
        this.widht = widht
        this.height = height
        this.color = color
        console.log('tanah siap di buat')
        }

        create() {
            board.fillStyle = this.color
            board.fillRect(0, 0, this.widht, this.height)
        }
    
}