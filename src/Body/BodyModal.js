import React from 'react';
import PropTypes from 'prop-types';

class BodyModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topicDisplayed: []
    };
  }

  /*addTopicToTopicDisplayed = (topic) =>{
    this.setState(prevState => ({
      topicDisplayed: [...prevState.topicDisplayed, topic]
    }));
  }*/

  /*getPopUpArray = (display) =>{
    const Image = "http://quickforms2.eecs.uottawa.ca/canbewell/";
    var popUpArray = [];
    var topicsToDisplay = display;

    topicsToDisplay.forEach((topic) => {
      var bodys = topic.body;
      //var subject = body.subject;
      popUpArray.push(<div><h1>{topic.name}</h1></div>);
      bodys.forEach((body) => {
        var bodyArray = body.text.split(/(\[\[|\]\]|\n)/g);
        var subject = body.subject.split(/(\[\[|\]\]|\n)/g);
        var bodyArrayToDisplay = [];
        var subjectArrayToDisplay = [];
        var outerTextToDisplay = [];

        for(var i = 0; i < subject.length; i++){
          if(subject[i] == '[['){
            var link = subject[i+1].split(';');
            if(link[1] === undefined){
              link[1] = "undefined";
            }

            if(link[0] === "image" || link[0] === "images"){
              var adress = Image + link[1].trim();
              subjectArrayToDisplay.push(<div><img className="imageFromFolder" src={adress} alt="canbewellImages"/></div>);
            }
            else if(link[1].indexOf("topic") === 0 || link[1].indexOf("topic") === 1){
            }
            else if(link[1].indexOf("test") === 0 || link[1].indexOf("test") === 1){
            }
            else{
              subjectArrayToDisplay.push(<a href={link[1]} target="_blank"><font color="Yellow">{link[0]}</font></a>);
            }
            i++;
          }
          else if(subject[i] == '\n'){
            subjectArrayToDisplay.push(<br/>);
          }
          else if (subject[i] !== ']]' ){
            subjectArrayToDisplay.push(subject[i]);
          }
        }

        for(var i = 0; i < bodyArray.length; i++){
          if(bodyArray[i] == '[['){
            var link = bodyArray[i+1].split(';');
            try{
              if(link[0] === "image" || link[0] === "images"){
                //the trim fonction remove spaces before an after links
                var adress = Image + link[1].trim();
                bodyArrayToDisplay.push(<div><img className="imageFromFolder" src={adress} alt=""/></div>);
              }
              else if(link[1].indexOf("topic") === 0 || link[1].indexOf("topic") === 1){
                bodyArrayToDisplay.push(<a><font color="Yellow">{link[0]}</font></a>);
              }
              else if(link[1].indexOf("test") === 0 || link[1].indexOf("test") === 1){
                bodyArrayToDisplay.push(<a><font color="Yellow">{link[0]}</font></a>);
              }
              else{
                bodyArrayToDisplay.push(<a href={link[1]} target="_blank"><font color="Yellow">{link[0]}</font></a>);
              }
              i++;
            }catch(err){}
          }
          else if(bodyArray[i] == '\n'){
            bodyArrayToDisplay.push(<br/>);
          }
          else if ( bodyArray[i] !== ']]' ){
            bodyArrayToDisplay.push(bodyArray[i]);
          }

        }
        popUpArray.push(<div className="topicBody"><p><b>{subjectArrayToDisplay}<br/></b>{bodyArrayToDisplay}</p>{outerTextToDisplay}</div>);
      });
    });
    return popUpArray;
  }*/

  getsubjectArray = (display) =>{
    const Image = "http://quickforms2.eecs.uottawa.ca/canbewell/";
    var subjectArray = [];
    //kind of redendant sorry
    var topicsToDisplay = display;

    topicsToDisplay.forEach((topic) => {
      var bodys = topic.body;
      //var subject = body.subject;
      subjectArray.push(<div><h3>{topic.name}</h3></div>);
      var k = 0;
      bodys.forEach((body) => {
        var bodyArray = body.text.split(/(\[\[|\]\]|\n)/g);
        var subject = body.subject.split(/(\[\[|\]\]|\n)/g);
        var bodyArrayToDisplay = [];
        var subjectArrayToDisplay = [];
        var outerTextToDisplay = [];

        for(var i = 0; i < subject.length; i++){
          if(subject[i] == '[['){
            var link = subject[i+1].split(';');
            if(link[1] === undefined){
              link[1] = "undefined";
            }
            //try{
            if(link[0] === "image" || link[0] === "images"){
              var adress = Image + link[1].trim();
              subjectArrayToDisplay.push(<div><img className="imageFromFolder" src={adress} alt=""/></div>);
            }
            /*else if(link[1].indexOf("topic") === 0 || link[1].indexOf("topic") === 1){
              var id = topic.name + k;
              k++;
              var mTopic = link[1].replace("topic://", "").trim();
              var outerText = this.getOuterText(mTopic);
              subjectArrayToDisplay.push(<div onClick={(idTarget) => this.togglePopUp(id)}><font color="Yellow">{link[0]}</font><div id={id} className="popup"><span className="popuptext"><p>{outerText}</p></span></div></div>);
            }
            else if(link[1].indexOf("test") === 0 || link[1].indexOf("test") === 1){
              var testId = topic.name + k;
              k++;
              var mTest = link[1].replace("test://", "").trim();
              var testOuterText = this.getOuterText(mTest);
              subjectArrayToDisplay.push(<div onClick={(idTarget) => this.togglePopUp(testId)}><font color="Yellow">{link[0]}</font><div id={testId} className="popup"><span className="popuptext"><p>{testOuterText}</p></span></div></div>);
            }*/
            else{
              subjectArrayToDisplay.push(<a href={link[1]} target="_blank"><font color="Yellow">{link[0]}</font></a>);
            }
            i++;
            //}catch(err){}
          }
          else if(subject[i] == '\n'){
            subjectArrayToDisplay.push(<br/>);
          }
          else if (subject[i] !== ']]' ){
            subjectArrayToDisplay.push(subject[i]);
          }
        }

        for(var i = 0; i < bodyArray.length; i++){
          if(bodyArray[i] == '[['){
            var link = bodyArray[i+1].split(';');
            try{
              if(link[0] === "image" || link[0] === "images"){
                var adress = Image + link[1].trim();
                bodyArrayToDisplay.push(<div><img className="imageFromFolder" src={adress} alt=""/></div>);
              }
              /*else if(link[1].indexOf("topic") === 0 || link[1].indexOf("topic") === 1){
                var id = topic.name + k;
                k++;
                var mTopic = link[1].replace("topic://", "").trim();
                var outerText = this.getOuterText(mTopic);
                subjectArrayToDisplay.push(<div onClick={(idTarget) => this.togglePopUp(id)}><font color="Yellow">{link[0]}</font><div id={id} className="popup"><span className="popuptext"><p>{outerText}</p></span></div></div>);
              }
              else if(link[1].indexOf("test") === 0 || link[1].indexOf("test") === 1){
                bodyArrayToDisplay.push(<a><font color="Yellow">{link[0]}</font></a>);
              }*/
              else{
                bodyArrayToDisplay.push(<a href={link[1]} target="_blank"><font color="Yellow">{link[0]}</font></a>);
              }
              i++;
            }catch(err){}
          }
          else if(bodyArray[i] == '\n'){
            bodyArrayToDisplay.push(<br/>);
          }
          else if ( bodyArray[i] !== ']]' ){
            bodyArrayToDisplay.push(bodyArray[i]);
          }

        }
        subjectArray.push(<div className="topicBody"><p><b>{subjectArrayToDisplay}<br/></b>{bodyArrayToDisplay}</p>{outerTextToDisplay}</div>);
      });
    });
    return subjectArray;
  }

  /*getOuterText = (button) => {
    var mOuterText = this.getPopUpArray(this.props.getTopic(button));
    return mOuterText;
  }*/

  /*togglePopUp = (id) => {
    var popup = document.getElementById(id);
    popup.classList.toggle("show");
  }*/


  render() {

    // Render info about the user
    if(!this.props.show) {
      return null;
    }
    var subject = [];
    subject = this.getsubjectArray(this.props.display);

    // The gray background
    const backdropStyle = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      //zIndex: 3,
    };

    // The modal "window"
    const myModalStyle = {
      backgroundColor: '#27AAE1',
      width: '90%',
      left: '0%',
      top: '10%',
      right: '0%',
      minHeight: 300,
      margin: '0 auto',
      textAlign:'left',
      padding: 30,
      color: 'white',
      overflowY: 'scroll'
    };

    return (
      <div>
        <div id="myBackdrop" onClick={this.props.onClose} className="backdrop" style={backdropStyle}>
          <div>
            <button className="button4" onClick={this.props.onClose}>X</button>
          </div>
        </div>
        <div className="myModal" style={myModalStyle}>
          <div>
            {subject}
            <div>
              <button className="button3" onClick={this.props.onClose}>{this.props.button}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BodyModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  display: PropTypes.array,
  button: PropTypes.string,
  getTopic: PropTypes.func.isRequired,
};

export default BodyModal;
