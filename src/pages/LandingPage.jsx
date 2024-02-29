import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';

function LandingPage() {
  // hook call at here
  const navigate = useNavigate()

  const handleNavigate = () => {
    //navigate to home page
    navigate('/home')
  }

  return (
    <>
      <div className='container '>
        <div className="header row align-items-center m-5">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p className='mt-3' style={{ textAlign: 'justify' }}>Media Player App, will allow you to add and remove their uploaded videos, also helps to arrange them in different categories by providing drag and drop functionalities</p>
            <button onClick={handleNavigate} className='btn btn-info mt-3'>Get Started</button>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            {/* <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="landing image" /> */}
            <img style={{ width: "40vw", height: "79vh" }} src="https://assets-global.website-files.com/6488cc2b899091ddde57a95d/64a6b0e0740e455bda54f399_Waveform.gif" alt="" />
          </div>
        </div>
        <div className="features">
          <h3 className="text-center ">Features</h3>
          <div className="row mt-5 mb-5">
            <div className="col-lg-4">
              <Card style={{ height: '440px', width: '22rem' }}>
                <Card.Img height={'300px'} variant="top" src="https://media.tenor.com/15YUsMWt4FEAAAAj/music.gif" />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                    User can upload, view and remove the videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{ width: '22rem' }}>
                <Card.Img height={'300px'} variant="top" src="https://i.pinimg.com/originals/03/2b/08/032b0870b9053a191b67dc8c3f340345.gif" />
                <Card.Body>
                  <Card.Title>Categorize Videos</Card.Title>
                  <Card.Text>
                    User can categorise the videos according to their prefernces using drag and drop features
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{ height: '440px', width: '22rem' }}>
                <Card.Img height={'300px'} variant="top" src="https://i.gifer.com/origin/91/9186eb0e475eeff5c6856e8ed43eb31e_w200.gif" />
                <Card.Body>
                  <Card.Title>Watch History</Card.Title>
                  <Card.Text>
                    User are able to see the history of
                    watched videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="row video p-5 border mt-5 rounded mb-5 align-items-center">
          <div className="col-lg-5">
            <h3 className='text-warning pb-3'>Simple, Fast and Powerful</h3>
            <p style={{ textAlign: 'justify' }}><span className='fs-4'>Play Everything: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime.</p>
            <p style={{ textAlign: 'justify' }}><span className='fs-4'>Categorize Videos: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime.</p>
            <p style={{ textAlign: 'justify' }}><span className='fs-4'>Watch History: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi perspiciatis! Deleniti maxime.</p>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <iframe width="688" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default LandingPage