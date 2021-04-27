import React, { Component } from 'react'
import Backdrop from './Backdrop/Backdrop'
import Slider from './ImageSlider/Slider'


class Main extends Component {
    state={
        sidedrawerOpen:false
    };
    drawerToggleClickHandler=()=>{
        this.setState( (prevState)=>{
            return {
                sidedrawerOpen: !prevState.sidedrawerOpen
            };
        });
    };
    backDropClickHandler=() =>{
        this.setState({sidedrawerOpen:false});
    }
    render() {
        let backdrop;
        if(this.state.sidedrawerOpen){
            backdrop=<Backdrop click={this.backDropClickHandler}/>
        }
        return (
             <div style={{width:'100%',height:'100vh',background:'#121212'}}>
                 <Slider/>
             </div>
        )
    }
}
export default Main;