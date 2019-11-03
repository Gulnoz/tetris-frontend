import React from 'react';

export default class TetrisWindow extends React.Component{

    state={
        ctx: [0,0,0,0]
    }
    componentDidMount(){
        //let canvasRef = React.useRef(null)
       
        this.boxHendler(0,0)
        this.boxHendler(0,0)
       
        setInterval(() => this.state.ctx[1] <= 300 ? this.hendler() : null,50)
       
    }

    ctxHendler=()=>{
        let canvas = this.refs.canvas
        return canvas.getContext("2d")
    }
    boxHendler=(x,y)=>{
        let ctx = this.ctxHendler()
        ctx.fillStyle = 'yellow'
        ctx.fillRect(this.state.ctx[0]+x, this.state.ctx[1]+y, this.state.ctx[2], this.state.ctx[3])
        ctx.strokeRect(this.state.ctx[0]+x, this.state.ctx[1]+y, this.state.ctx[2], this.state.ctx[3])
        ctx.lineWidth = 1
        ctx.strokeStyle = 'black'
    }
    hendler=()=>{
        console.log(this.state.ctx[1])
        if ((this.state.ctx[1]) <= 300) {
        let ctx =this.ctxHendler()
        ctx.clearRect(0,0,300,400)
        this.setState({
            ctx: [25, this.state.ctx[1]+5, 25, 25]
        })
    }
    }

    componentDidUpdate(){
        
        // this.boxHendler(0, 0)
        // this.boxHendler(25, 0)
        // this.boxHendler(25, 25)
        // this.boxHendler(50, 25)

        // this.boxHendler(0,0)
        // this.boxHendler(25,0)
        // this.boxHendler(0, 25)
        // this.boxHendler(25, 25)

        // this.boxHendler(0, 0)
        // this.boxHendler(25, 0)
        // this.boxHendler(25, 25)
        // this.boxHendler(50, 25)

        // this.boxHendler(0, 0)
        // this.boxHendler(25, 0)
        // this.boxHendler(25, 50)
        // this.boxHendler(25, 25)

        // this.boxHendler(50, 0)
        // this.boxHendler(25, 0)
        // this.boxHendler(0, 25)
        // this.boxHendler(25, 25)

        this.boxHendler(0, 0)
        this.boxHendler(0, 25)
        this.boxHendler(0, 50)
        this.boxHendler(0, 75)

        // this.boxHendler(50, 0)
        // this.boxHendler(75, 0)
        // this.boxHendler(100, 0)
        // this.boxHendler(125, 0)
    }
   rotateToRight=()=>{
       let ctx=this.ctxHendler()
       ctx.clearRect(0, 0, 300, 400)
       ctx.rotate( 180 * Math.PI / 180);
   }
render(){
return(
   <>
        <canvas style={{ border: 'solid 5px black'}}ref="canvas" width={300} height={400} />
       <button onClick={this.rotateToRight}>Rotate</button>
    </>
)

}


} 