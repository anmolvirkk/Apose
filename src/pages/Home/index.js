import React from 'react'
import {ArrowRight, ArrowLeft} from 'react-feather'
import './home.css'
import Grid from '@material-ui/core/Grid';

export default function Home() {
        return (
            <React.Fragment>
            <section className="home">       
      <Grid container alignItems="center" style={{height: '100%'}}>
          <Grid item xs={1} />
            <Grid item xs={6}>
            <h1>Monottres pures, atutomattiques et très fratnotvsatises</h1>
            <button><p>Discover the collections</p><ArrowRight /></button>
            </Grid>
        </Grid>
                <video autoPlay muted loop style={{height: '100%', width: '100%', objectFit: 'cover', position: 'absolute', top: 0, zIndex: '-1'}}>
                    <source src="https://www.apose.fr/wp-content/themes/apose/assets/video/presentation-montres-apose-collection-n3-41mm.mp4" type="video/mp4" />
                </video>
            </section>
            <section className="asked">
                        <Grid container direction="column" justify="center" alignItems="center">
                        <h2>Asked</h2>
                        <Grid item xs={6} style={{textAlign: 'center', marginTop: '2rem'}}>
                        <h1>High-end watches and French elegance</h1>
                        </Grid>
                        </Grid>
                <Grid container justify="center" style={{paddingTop: '4rem'}}>
                    <Grid item xs={1} />
                    <Grid item xs={4}>
                    <img src = "https://www.apose.fr/wp-content/uploads/2021/04/mise-en-situation-or-rose-web.jpg" alt="Watches" />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                    <article className="askedArticle">
                <p>On the first day, Apose already seemed obvious: it was time to create a brand of luxury watches that radically distinguishes itself by entrusting all the codes of French elegance to the exceptional dexterity of French manufactures.
The idea was born from an explosive cocktail: the two founders, one a designer, the other a physicist, both steeped in their French culture and enamored of the excellence of luxury, have served ten years the most prestigious brands of Swiss watches launched in a frantic race for sophistication.</p>
                <p>French elegance is unique because it is founded on purity, dazzling sobriety, rebellious and joyful daring, a taste for side steps which must surprise and please, exaggerated demand.
It is a challenge to ensure that this treasure, brilliantly maintained in all the arts, from fashion to gastronomy, regains its brilliance in watchmaking.
It is an even greater challenge to bring it back to life in the hands of French artisans, whose talent so much appreciated by Swiss watchmakers will be the greatest asset for a French brand of fine watches. Apose is that brand. It exists to meet both challenges.</p>   
                
<button><p>Discover Alloy</p><ArrowRight /></button>
                </article>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
</section>
            <section className="collections">
                <Grid container style={{border: '1px solid #454545'}}>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                    <article>
    <h1>Giving the time in the most beautiful way</h1>
    <p>Giving the time and only the time is the noblest function of a watch. The others are just complications. It is a strong bias of Apose which considers that giving the time is the only information that ensures punctuality and therefore respect for others and the quality of the relationship. This unique mission deserves the purest design. It is the brand's first opposite.</p>
</article>
                    </Grid>
                    <Grid item xs={5}>
                    <div className="carousel">
    <h2>Collection</h2>
    <h1>not°3</h1>
    <div className="slider">
    <ArrowLeft />
    <img alt="carousel" src = "https://www.apose.fr/wp-content/uploads/2021/03/or-rose-brosse-luxe-montre-automatique.png" />
    <ArrowRight />
    </div>
    <h3>Brushed rose gold</h3>
</div>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
</section>
            <section className="asked">
                        <Grid container direction="column" justify="center" alignItems="center">
                        <h2>In direct relation with the brand</h2>
                        <Grid item xs={6} style={{textAlign: 'center', marginTop: '2rem'}}>
                        <h1>Between us, a direct, sincere and fruitful link</h1>
                        </Grid>
                        </Grid>
                <Grid container justify="center" style={{paddingTop: '4rem'}}>
                    <Grid item xs={1} />
                    <Grid item xs={4}>
                    <img src = "https://www.apose.fr/wp-content/uploads/2021/03/apose-relation-directe-marque-montres.jpg" alt="Watches" />
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={5}>
                    <article className="askedArticle">
                <p>Manufacturing in France and offering a particularly attractive price / quality ratio is an equation deemed impossible to solve. The solution is exclusive online sales which, by eliminating the long traditional chain of intermediaries, also makes it possible to forge an incomparable relationship between Apose and its customers.
It is an extraordinary opportunity to be able to meet around an Apose watch.</p>   
                
<button><p>Let's meet up</p><ArrowRight /></button>
                </article>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
</section>
            <section className="frenchmade">
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Grid container justify="center" alignItems="center" direction="column">
                            <Grid item>
                            <h2>French made</h2>
                            </Grid>
                            <Grid item xs={7}>
                            <h1>The pure logic of creating French elegance with French people.</h1>
                            </Grid>
                        </Grid>
                    </Grid>
                        <Grid item xs={6} className="watchStructure">
                            <img src = "https://www.apose.fr/wp-content/themes/apose/assets/img/eclate/apose-eclate-verre-saphir.png" alt="structure" />
                            <img src = "https://www.apose.fr/wp-content/themes/apose/assets/img/eclate/apose-eclate-lunette.png" alt="structure" />
                            <img src = "https://www.apose.fr/wp-content/themes/apose/assets/img/eclate/apose-eclate-lunette-joint.png" alt="structure" />
                            <img src = "https://www.apose.fr/wp-content/themes/apose/assets/img/eclate/apose-eclate-rehaut.png" alt="structure" />
                            <img src = "https://www.apose.fr/wp-content/themes/apose/assets/img/eclate/apose-eclate-cadran.png" alt="structure" />
                            <img src = "https://www.apose.fr/wp-content/themes/apose/assets/img/eclate/apose-eclate-exposition-1.png" alt="structure" />
                            <img src = "https://www.apose.fr/wp-content/themes/apose/assets/img/eclate/apose-eclate-joint-fond.png" alt="structure" />
                            <img src = "https://www.apose.fr/wp-content/themes/apose/assets/img/eclate/apose-eclate-couronne-et-fond.png" alt="structure" />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={1} />
                                <Grid item xs={10}>
                                <p style={{columns: 2, columnGap: '5vw'}}>
                            It seems that you have to be crazy to want to create a high-end watch using the know-how of the most prestigious French manufacturers and without any component from Asia. Let's be crazy. This bet, Apose decided to win it as a team. The Apose watch requires the intervention of the best players in the sector. Our luck is that these precious heirs to flamboyant watchmaking are French and supply the discerning connoisseurs at the head of the greatest luxury brands. The manufacture of an Apose watch is based on a multitude of partnerships which constitutes a formidable asset beyond logic. Meeting, dialoguing, negotiating the development of new processes, encouraging the production of new tools: so many opportunities to further improve watches. And to make everyone want to see the rebirth of French watchmaking ... 
                            </p>
                                </Grid>
                                <Grid item xs={1} />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <button className="mainButton"><p>Discover the manufactures of excellence</p><ArrowRight /></button>
                        </Grid>
                </Grid>
            </section>
            </React.Fragment>
        )
    }
