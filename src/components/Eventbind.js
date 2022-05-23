import React, { Component } from 'react'

import img1 from './all assert/black-man-with-laptop.jpg'
import img2 from './all assert/cute-little-boy-digging-hole.jpg'
import img3 from './all assert/happy-dog-digging.jpg'
import img4 from './all assert/muslim-girl-with-laptop-white.jpg'
import img5 from './all assert/reader.jpg'
import img6 from './all assert/dog-digging.jpg'


function Image(props) {
  return (
    <div>
      <div className='flex items-center  w-full justify-center'>
        <img src={props.img} width='250px' />
      </div>
    </div>
  )
}


class Eventbind extends Component {

  constructor(props) {
    super(props)

    this.state = {
      price: '$34.4',
      like: 'like',
      love:'love',
      loveCount:0,
      likeCount:0,

      loveCount2:0,
      likeCount2:0,
      like2: 'like',

      loveCount3:0,
      likeCount3:0,
      like3: 'like',
      like3: 'like',

      loveCount4:0,
      likeCount4:0,
      like4: 'like',

      loveCount5:0,
      likeCount5:0,
      like5: 'like',

      loveCount6:0,
      likeCount6:0,
      like6: 'like',
    }
  }



  like() {
    this.setState({
      like:'liked',
      likeCount: this.state.likeCount+1,
    })
  }

  love() {
    this.setState({
      love:'loved',
      loveCount: this.state.loveCount+1,
    })
  }


  like2() {
    this.setState({
      like2:'liked',
      likeCount2: this.state.likeCount2+1,
    })
  }

  love2() {
    this.setState({
      love2:'loved',
      loveCount2: this.state.loveCount2+1,
    
    })
  }


  like3() {
    this.setState({
      like3:'liked',
      likeCount3: this.state.likeCount3+1
    })
  }

  love3() {
    this.setState({
      love3:'loved',
      loveCount3: this.state.loveCount3+1,
    })
  }


  like4() {
    this.setState({
      like4:'liked',
      likeCount4: this.state.likeCount4+1
    })
  }

  love4() {
    this.setState({
      love4:'loved',
      loveCount4: this.state.loveCount4+1,
    })
  }

  like5() {
    this.setState({
      like5:'liked',
      likeCount5: this.state.likeCount5+1
    })
  }

  love5() {
    this.setState({
      love5:'loved',
      loveCount5: this.state.loveCount5+1,
    })
  }

  like6() {
    this.setState({
      like6:'liked',
      likeCount6: this.state.likeCount6+1
    })
  }

  love6() {
    this.setState({
      love6:'loved',
      loveCount6: this.state.loveCount6+1,
    })
  }




  render() {
    return (
      <div className='grid sm:grid-cols-2  md:grid-cols-3 justify-center items-center gap-y-4'>

        
        <div>
          <Image img={img1}/>
         <div>
         <p>black man with laptop</p>
          <button className="bg-orange-500 px-4 text-white  shadow-lg font-bold  rounded-lg mx-2"  onClick={this.like.bind(this)}> {this.state.like}({this.state.likeCount})</button>

          <button className="bg-orange-500 px-4 text-white  shadow-lg font-bold  rounded-lg "  onClick={this.love.bind(this)}> {this.state.love}({this.state.loveCount})</button>
         </div>
        </div>


        <div>
          <Image img={img2}/>
         <div>
         <p>cute little boy digging hole</p>
          <button className="bg-orange-500 px-4 text-white  shadow-lg font-bold  rounded-lg mx-2"  onClick={this.like2.bind(this)}> {this.state.like2}({this.state.likeCount2})</button>

          <button className="bg-orange-500 px-4 text-white  shadow-lg font-bold  rounded-lg "  onClick={this.love2.bind(this)}> {this.state.love}({this.state.loveCount2})</button>
         </div>
        </div>


        <div>
          <Image img={img3}/>
         <div>
         <p>happy dog digging</p>
          <button className="bg-orange-500 px-4 text-white  shadow-lg font-bold  rounded-lg mx-2"  onClick={this.like3.bind(this)}> {this.state.like3}({this.state.likeCount3})</button>

          <button className="bg-orange-500 px-4 text-white  shadow-lg font-bold  rounded-lg "  onClick={this.love3.bind(this)}> {this.state.love}({this.state.loveCount3})</button>
         </div>
        </div>


        <div>
          <Image img={img4}/>
         <div>
         <p>muslim girl with laptop-white</p>
          <button className="bg-orange-500 px-4 text-white  shadow-lg font-bold  rounded-lg mx-2"  onClick={this.like3.bind(this)}> {this.state.like}({this.state.likeCount3})</button>

          <button className="bg-orange-500 px-4 text-white  shadow-lg font-bold  rounded-lg "  onClick={this.love3.bind(this)}> {this.state.love}({this.state.loveCount3})</button>
         </div>
        </div>

        <div>
          <Image img={img5}/>
         <div>
         <p>reader</p>
          <button className="bg-orange-500 px-4 text-white  shadow-lg font-bold  rounded-lg mx-2"  onClick={this.like5.bind(this)}> {this.state.like5}({this.state.likeCount5})</button>

          <button className="bg-orange-500 px-4 text-white  shadow-lg font-bold  rounded-lg "  onClick={this.love5.bind(this)}> {this.state.love5}({this.state.loveCount5})</button>
         </div>
        </div>


        <div>
          <Image img={img6}/>
         <div>
         <p>happy dog digging</p>
          <button className="bg-orange-500 px-4 text-white  shadow-lg font-bold  rounded-lg mx-2"  onClick={this.like6.bind(this)}> {this.state.like6}({this.state.likeCount6})</button>

          <button className="bg-orange-500 px-4 text-white  shadow-lg font-bold  rounded-lg "  onClick={this.love6.bind(this)}> {this.state.love6}({this.state.loveCount6})</button>
         </div>
        </div>

      </div>
    )
  }
}

export default Eventbind