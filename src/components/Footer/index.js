import React, { Component } from 'react'
import './footer.css'
import Grid from '@material-ui/core/Grid';
import {ArrowRight, ArrowUp} from 'react-feather'

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment> 
            <section className="footer">
                <Grid container direction="column">
                        <Grid item className="ribbon">
                <Grid container>
                <Grid item xs={1} />
                    <Grid item xs>
                        <h2>24 month warranty</h2>
                        <p>Enjoy the high quality of Apose watches.</p>
                    </Grid>
                    <Grid item xs>
                        <h2>Free delivery and return</h2>
                        <p>You have the right to try and even to give up.</p>
                    </Grid>
                    <Grid item xs>
                        <h2>Try at home</h2>
                        <p>In peace, for 14 days at home, adopt an Apose.</p>
                    </Grid>
                    <Grid item xs>
                        <h2>Payment in 3 installments free of charge</h2>
                        <p>Secure transaction and payment in 3 installments free of charge, if you want.</p>
                    </Grid>
                <Grid item xs={1} />
                </Grid>
                    </Grid>
                        <Grid item>
                            <Grid container style={{background: '#272727', height: '60vh'}}>
                <Grid item xs={1} />
                            <Grid item xs={5} style={{borderRight: '1px solid #454545', height: '100%', display: 'flex', justifyContent: "center", alignItems:"center"}}>
                                <h1 style={{fontSize: '5rem', fontWeight: 300}}>Asked the watches customer service</h1>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container direction="column" style={{height: '100%'}} alignItems="center">
                                    <Grid item xs />
                                    <Grid item style={{width: '80%'}}>
                                    <Grid container> 
                                    <Grid item xs>
                                    <h2 style={{fontSize: '1rem', marginBottom: '6rem', fontWeight: 300}}>Subscribe to Apose News</h2>  
                                <div>
                                <input type = "text" placeholder="Your email address" className="newsletterInput" />
                                <ArrowRight />
                                </div>
                                    </Grid>
                                    </Grid>
                                    </Grid>
                                    <Grid item xs />
                                    <Grid item style={{width: '100%'}}>      
                                <Grid container justify="space-between" style={{width: '100%', borderTop: '1px solid #454545', height: '6rem'}}>
                                    <Grid xs item className="socials" style={{border: 0}}>Instagram</Grid>
                                    <Grid xs item className="socials">LinkedIn</Grid>
                                    <Grid xs item className="socials">Facebook</Grid>
                                    <Grid xs item className="socials">Youtube</Grid>
                                    <Grid xs item className="socials"><ArrowUp /></Grid>
                                        <Grid item xs={1} />
                                </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        </Grid>
                        <Grid item xs={12}>
                        <Grid container className="bottom">
                            <Grid item xs={1} />
                            <Grid item />
                                <ul>
                                    <li>Mediakit</li>
                                    <li>Legal Notice</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms of Sales</li>
                                    <li>Credits</li>
                                </ul>
                                <Grid item xs />
                            <Grid item xs={1} style={{borderLeft: '1px solid #454545', display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center', boxSizing: 'border-box'}}>
                    <svg viewBox="0 0 233.8 285.2" className="marsLogo">
<g><g><polygon points="61.6,141.1 61.6,1.3 39,1.3 31.4,72.7 31,72.7 23.8,1.3 0.8,1.3 0.8,141.1 15.8,141.1 15.8,56.5 16,56.5 24.8,141.1 37.6,141.1 46.6,56.5 47,56.5 47,141.1"></polygon>
<path d="M99.6,1.3H77L64.8,141.1h15.4l2.8-36h9.6l3,36h17L99.6,1.3z M84.2,91.7l3.4-41.8h0.6l3.4,41.8H84.2z"></path>
<path d="M133.6,77.9h4.6c2.3,0,3.4,2.8,3.4,8.4v8.6v46.2h17.8V95.5V84.7v-0.8h0c-0.1-3.9-0.7-6.8-2-8.7c-1.3-2.1-3-3.4-5-3.9 c2-0.7,3.7-2,5-4.1c1.3-2.1,2-5.2,2-9.5V21.9c0-6.5-1.9-11.6-5.7-15.2s-8.5-5.4-14.1-5.4h-23.8v139.8h17.8V77.9z M133.6,16.1h4.2 c2.5,0,3.8,2.9,3.8,8.6v32c0,5.3-1.1,8-3.4,8h-4.6V16.1z"></path>
<path d="M206.6,130c1.1-2.6,1.7-5.7,1.7-9.3V99.7c0-4.5-0.6-8.4-1.9-11.8c-1.3-3.4-2.9-6.6-4.8-9.6c-1.9-3-4-5.9-6.2-8.6 c-2.2-2.7-4.3-5.5-6.2-8.5c-1.9-3-3.5-6.1-4.8-9.5c-1.3-3.4-1.9-7.4-1.9-11.8V24.3c0-3.2,0.3-5.3,0.9-6.6c0.6-1.2,1.5-1.9,2.7-1.9 h0.8c1.2,0,2.1,0.7,2.7,2c0.6,1.3,0.9,3.5,0.9,6.5v33.5h16.4v-36c0-3.5-0.6-6.6-1.7-9.3c-1.1-2.6-2.6-4.8-4.5-6.4 c-1.9-1.6-4-2.9-6.4-3.6c-2.4-0.8-4.8-1.2-7.2-1.2h-2c-2.5,0-5,0.4-7.4,1.2c-2.4,0.8-4.6,2-6.5,3.6c-1.9,1.6-3.5,3.8-4.6,6.4 c-1.1,2.6-1.7,5.7-1.7,9.3v21.1c0,4.5,0.6,8.4,1.9,11.9c1.3,3.5,2.9,6.7,4.8,9.6c1.9,3,4,5.8,6.2,8.5c2.2,2.7,4.3,5.5,6.2,8.5 c1.9,3,3.5,6.1,4.8,9.6c1.3,3.4,1.9,7.3,1.9,11.6v15.8c0,5.6-1.4,8.5-4.3,8.5h-0.6c-1.4,0-2.5-0.7-3.3-2c-0.8-1.3-1.2-3.5-1.2-6.5 V84.6h-16.4v36.2c0,3.5,0.6,6.6,1.8,9.3c1.2,2.6,2.8,4.8,4.7,6.4c1.9,1.6,4.1,2.9,6.6,3.6c2.5,0.8,4.9,1.2,7.3,1.2h3.2 c2.5,0,5-0.4,7.4-1.2c2.4-0.8,4.5-2,6.4-3.6C203.9,134.8,205.4,132.7,206.6,130z"></path>
<path d="M87.1,149.2c-1.9-1.6-4-2.9-6.4-3.6c-2.4-0.8-4.9-1.2-7.4-1.2h-3.6c-2.4,0-4.8,0.4-7.2,1.2c-2.4,0.8-4.6,2-6.5,3.6 c-1.9,1.6-3.5,3.8-4.6,6.4c-1.1,2.6-1.7,5.7-1.7,9.3v99c0,3.5,0.6,6.6,1.7,9.3c1.1,2.6,2.7,4.8,4.6,6.4c1.9,1.6,4.1,2.9,6.5,3.6 c2.4,0.8,4.8,1.2,7.2,1.2h3.6c2.5,0,5-0.4,7.4-1.2c2.4-0.8,4.5-2,6.4-3.6c1.9-1.6,3.4-3.8,4.5-6.4c1.1-2.6,1.7-5.7,1.7-9.3v-99 c0-3.5-0.6-6.6-1.7-9.3C90.4,152.9,88.9,150.8,87.1,149.2z M75.5,261.3c0,5.6-1.2,8.5-3.6,8.5h-0.8c-2.4,0-3.6-2.8-3.6-8.5v-93.9 c0-5.6,1.2-8.5,3.6-8.5h0.8c2.4,0,3.6,2.8,3.6,8.5V261.3z"></path>
<path d="M124.4,261.1c0,5.7-1.2,8.5-3.6,8.5H120c-2.4,0-3.6-2.8-3.6-8.5V144.3H98.6v119.3c0,3.6,0.6,6.7,1.7,9.3 c1.1,2.6,2.7,4.8,4.6,6.5c1.9,1.7,4.1,2.9,6.5,3.7c2.4,0.8,4.8,1.2,7.2,1.2h3.6c2.5,0,5-0.4,7.4-1.2c2.4-0.8,4.5-2,6.4-3.7 c1.9-1.7,3.4-3.8,4.5-6.5c1.1-2.6,1.7-5.8,1.7-9.3V144.3h-17.8V261.1z"></path>
<path d="M184.9,149.2c-1.9-1.6-4-2.9-6.4-3.6c-2.4-0.8-4.9-1.2-7.4-1.2h-3.6c-2.4,0-4.8,0.4-7.2,1.2c-2.4,0.8-4.6,2-6.5,3.6 c-1.9,1.6-3.5,3.8-4.6,6.4c-1.1,2.6-1.7,5.7-1.7,9.3v48.5v24.6v25.9c0,3.5,0.6,6.6,1.7,9.3c1.1,2.6,2.7,4.8,4.6,6.4 c1.9,1.6,4.1,2.9,6.5,3.6c2.4,0.8,4.8,1.2,7.2,1.2h3.6c2.5,0,5-0.4,7.4-1.2c2.4-0.8,4.5-2,6.4-3.6c1.9-1.6,3.4-3.8,4.5-6.4 c1.1-2.6,1.7-5.7,1.7-9.3v-27.4v-23.1v-5.4h-22.4v14.6h4.6v38.8c0,5.6-1.2,8.5-3.6,8.5h-0.8c-2.4,0-3.6-2.8-3.6-8.5v-24.2v-23.8 v-46c0-3.2,0.3-5.3,0.9-6.6c0.6-1.2,1.5-1.9,2.7-1.9h0.8c1.2,0,2.1,0.7,2.7,2c0.6,1.3,0.9,3.5,0.9,6.5v33.5h17.8v-36 c0-3.5-0.6-6.6-1.7-9.3C188.3,152.9,186.8,150.8,184.9,149.2z"></path>
<polygon points="231,159.1 231.2,159.1 232.6,159.1 232.6,144.3 231.2,144.3 231,144.3 196.4,144.3 196.4,284.1 232.6,284.1 232.6,269.3 214.2,269.3 214.2,220.9 227.6,220.9 227.6,207.7 214.2,207.7 214.2,159.1"></polygon>
<path d="M24.6,144.4H0.8v139.8h17.8V221h4.6c2.3,0,3.4,2.8,3.4,8.4v8.6v46.2h17.8v-45.7v-10.7V227h0c-0.1-3.9-0.7-6.8-2-8.7 c-1.3-2.1-3-3.4-5-3.9c2-0.7,3.7-2,5-4.1c1.3-2.1,2-5.2,2-9.5V165c0-6.5-1.9-11.6-5.7-15.2S30.2,144.4,24.6,144.4z M26.6,199.8 c0,5.3-1.1,8-3.4,8h-4.6v-48.6h4.2c2.5,0,3.8,2.9,3.8,8.6V199.8z"></path></g></g>
</svg>
                    </Grid>       
                            <Grid item xs={1} />
                        </Grid>
                        </Grid>
            </Grid>
            </section>
            </React.Fragment>
        )
    }
}
