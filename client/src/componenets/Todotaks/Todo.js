import React, { Component ,useState} from "react";
import "./Todo.css";
import Add from "./add.png";
import Listitem from "./Listitem";


export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        on:false,
      items: [],
      currentItem: {
        text: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: "",
          key: "",
        },
      });
    }
  }
  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filteredItems,
    });
  }
  setUpdate(text, key) {
    //console.log("items:"+this.state.items);
    const items = this.state.items;
    items.map((item) => {
      if (item.key === key) {
        //console.log(item.key +"    "+key)
        item.text = text;
      }
    });
    this.setState({
      items: items,
    });
  }

  render() {
    return (
      // <div className="bg">
        <div className="todobody">
          <div className="todohead">
            <div className="todotitle">To-do List</div>
            {/* <div className="todoaddbtn" >
              <img src={Add} className="addimage" 
            //   onclick={()=>{this.setState({on:!this.state.on})}}
              ></img>
              {console.log(this.state.on)}
            </div> */}
          </div>
         
            <div className="todoaddtask">
              <form className="todoformm" onSubmit={this.addItem}>
                <input
                  type="text"
                  placeholder="Enter text"
                  value={this.state.currentItem.text}
                  onChange={this.handleInput}
                ></input> 
                <button type="submit">ADD</button>
              </form>
            </div>
        
          <div className="todosub">
            <Listitem
              items={this.state.items}
              deleteItem={this.deleteItem}
              setUpdate={this.setUpdate}
            />
          </div>
        </div>
     // </div>
    );
  }
}

export default Todo;
