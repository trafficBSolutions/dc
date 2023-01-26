import {useState, useEffect } from 'react'
import {GoogleMap, LoadScript, StandaloneSearchBox, Marker} from '@react-google-maps/api'
const mapContainerStyle = {
  height: "400px",
  width: "800px"
}

const center = {
  lat: -3.745,
  lng: -38.523
};
  
const position = {
  lat: 37.772,
  lng: -122.214
}

const mark = marker => {
  console.log('marker: ', marker)
}



const initialState = {
  company: '',
  email: '',
  password: '',
  isMember: true,
}

  const Register = () => {

    
    const [searchBox, setSearchBox] = useState(null);

  

    

  const [values, setValues] = useState(initialState)

  // global state and useNavigate
  const handleChange = (e) => {
    console.log(e.target)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

    
      return (
        <body class="page-template-default page page-id-13">
        <header class="site-header">
              <div class="container">
              <h1 class="school-logo-text float-left"><a href="/landing"><strong>Direct</strong> Connection</a></h1>
                         <div class="site-header__util">
                                        </div>
                </div>
                </header>

    <div class="page-banner">
     <div class="page-banner__bg-image" style={ { backgroundImage: "url('connection.jpg')" } }></div>
      <div class="page-banner__content container container--narrow">
        <h1 class="page-banner__title">Register</h1>
        <div class="page-banner__intro">
            <p></p>
        </div>
      </div>
    </div>

<div class="container container--narrow page-section">
  <h2 class="headline headline--tiny">Want to join and connect with companies? Sign up and get your company out there:</h2>
  
    <label class="header">Profile Photo:</label>
      <input id="image" type="file" name="profile_photo" placeholder="Photo" required="" capture></input>
    <label class="company-name">Company Name</label>
      <div class="company-input">
        <input text="headline headline--input" placeholder="Enter Company"></input>
      </div>
    <label class="company-email">Email</label>
          <div class="email-input">
          <input text="headline headline--input" placeholder="Enter Email"></input>
          </div>
          <label class="company-address">Company Address</label>
          <div class="address-input">
          <input text="headline headline--input" placeholder="Enter Address"></input>
          </div>
          <label class="company-city">City</label>
          <div class="city-input">
          <input text="headline headline--input" placeholder="Enter City"></input>
          </div>
          <label class="company-zip">Zip Code</label>
          <div class="zip-input">
          <input text="headline headline--input" placeholder="Enter Zip"></input>
          </div>
          <label class="company-description">Tell us about your company and what you do!</label>
          <div class="description-input">
          <textarea rows="5" cols="80" id="TITLE" text="headline headline--input" placeholder="Description"></textarea>
          </div>
          <label class="company-map">Map</label>   

    
  
          <LoadScript
          googleMapsApiKey='AIzaSyCn_r-c-ytXuGjJ-qS4CR9aD9i4-p4Vy6I'
          libraries={lib}
          >
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
              >
                {/* Child components, such as markers, info windows, etc. */}
      
                 <StandaloneSearchBox
                onLoad={handleLoad}
                onPlacesChanged={handlePlacesChanged}
              >
                
                <input
                  type="text"
                  placeholder="Search"
                  style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `240px`,
                    height: `32px`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                    position: "absolute",
                    left: "50%",
                    marginLeft: "-120px"
                  }}
                />
              </StandaloneSearchBox>
      
              <Marker
              onLoad={mark}
            position={position}/>
              </GoogleMap>
      </LoadScript>

  
        </div>  
     

    <footer class="site-footer">
                  <div class="site-footer__inner container container--narrow">
                    <div class="group">
                      <div class="site-footer__col-one">
                        <h1 class="school-logo-text school-logo-text--alt-color">
                          <a href="/landing"><strong>Direct</strong> Connection</a>
                        </h1>
                        <p><a class="site-footer__link" href="index.html">706-263-0175</a></p>
                      </div>
                    </div>
                  </div>
            </footer>

</body>
    )
}
  

export default Register



