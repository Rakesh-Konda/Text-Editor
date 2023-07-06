import {Component} from 'react'
import {AiOutlineUnderline} from 'react-icons/ai'
import {GoItalic} from 'react-icons/go'
import {VscBold} from 'react-icons/vsc'
import './index.css'
import {
  ButtonBold,
  Buttonitalic,
  Buttonunder,
  TextArea,
} from './styledComponent'

class Editor extends Component {
  state = {boldTxt: false, italicTxt: false, underTxt: false}

  Bold = () => {
    this.setState(prevState => ({
      boldTxt: !prevState.boldTxt,
    }))
  }

  Italic = () => {
    this.setState(prevState => ({
      italicTxt: !prevState.italicTxt,
    }))
  }

  UnderLine = () => {
    this.setState(prevState => ({
      underTxt: !prevState.underTxt,
    }))
  }

  render() {
    const {boldTxt, italicTxt, underTxt} = this.state
    return (
      <div className="bg">
        <div className="bg1">
          <div>
            <h1 className="h1">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="im"
            />
          </div>
          <div className="rd">
            <ul className="ul">
              <li>
                <ButtonBold
                  type="button"
                  data-testid="bold"
                  boldTxt={boldTxt}
                  onClick={this.Bold}
                >
                  <VscBold size={25} />
                </ButtonBold>
              </li>
              <li>
                <Buttonitalic
                  type="button"
                  data-testid="italic"
                  italicTxt={italicTxt}
                  onClick={this.Italic}
                >
                  <GoItalic size={25} />
                </Buttonitalic>
              </li>
              <li>
                <Buttonunder
                  type="button"
                  data-testid="underline"
                  underTxt={underTxt}
                  onClick={this.UnderLine}
                >
                  <AiOutlineUnderline size={25} />
                </Buttonunder>
              </li>
            </ul>
            <hr />
            <TextArea
              type="text"
              boldTxt={boldTxt}
              underTxt={underTxt}
              italicTxt={italicTxt}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default Editor
