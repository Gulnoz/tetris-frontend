import React from 'react';

export default class TetrisWindow extends React.Component{

    state={
        ctx: [0,0,0,0]
    }
    componentDidMount(){
        //let canvasRef = React.useRef(null)
       
        this.boxHendler()
        this.boxHendler()
       
        setInterval(this.hendler,1000)
    }

    ctxHendler=()=>{
        let canvas = this.refs.canvas
        return canvas.getContext("2d")
    }
    boxHendler=()=>{
        let ctx = this.ctxHendler()
        ctx.fillStyle = 'yellow'
        ctx.fillRect(this.state.ctx[0], this.state.ctx[1], this.state.ctx[2], this.state.ctx[3])
        ctx.strokeRect(this.state.ctx[0], this.state.ctx[1], this.state.ctx[2], this.state.ctx[3])
        ctx.lineWidth = 1
        ctx.strokeStyle = 'black'
    }
    hendler=()=>{
        console.log('hendelr')
        let ctx =this.ctxHendler()
        ctx.clearRect(0,0,550,400)
        this.setState({
            ctx: [25, this.state.ctx[1]+5, 25, 25]
        })
    }

    componentDidUpdate(){
        // let canvas = this.refs.canvas
        // let ctx = canvas.getContext("2d")
        // ctx.fillStyle = 'yellow'


        // ctx.fillRect(this.state.ctx[0], this.state.ctx[1], this.state.ctx[2], this.state.ctx[3])
        // ctx.strokeRect(this.state.ctx[0], this.state.ctx[1], this.state.ctx[2], this.state.ctx[3])
        // ctx.lineWidth = 1
        // ctx.strokeStyle = 'black'
        this.boxHendler()
        this.boxHendler()
       
    }
   
render(){
return(
   <>
    <canvas ref="canvas" width={550} height={400} />
    <div><button onClick={this.hendler}>get box</button></div>
    </>
)

}


} 