// import React from 'react';
// import styles from './V3Services.module.scss';
// import Image from 'next/image';
// import map from '../../../../public/world-map.png';
// import { barlow } from '@/styles/font';
// import Button from '@/components/Buttons/Button';

// export default function V3Services() {
//   return (
//     <section className={styles.servicesSection}>
//       <div className={styles.mainContainer}>
//         <div className={styles.topInformationsContainer}>
//           <h1 className={`${styles.title} ${barlow.className}`}>
//             <span className={styles.colored}>Mon role,</span> Mes services
//           </h1>
//           <p className={`${styles.description} ${barlow.className}`}>
//             En tant que consultant, mon role sera de mettre en place les
//             strategies et outils necessaires a l atteinte de vos objectifs ainsi
//             que ceux de vos clients, dans le but d optimiser vos ressources tout
//             en accompagnant vos equipes
//           </p>
//           <div className={styles.buttonContainer}>
//             <Button label="Learn more" variant="primary" />
//           </div>
//         </div>

//         <div className={styles.shapesContainer}>
//           {/* Arrow */}
//           <div className={styles.bordersArrow}>
//             <div className={styles.arrow}></div>
//           </div>

//           {/* Hexagones principaux */}
//           <div className={styles.bordersHexagon1}>
//             <div className={styles.hexagon}>
//               <div className={styles.contentContainer}>
//                 <p className={`${styles.serviceNumber} ${barlow.className}`}>
//                   01
//                 </p>
//                 <h2 className={`${styles.serviceTitle} ${barlow.className}`}>
//                   <span className={styles.colored}>CFO</span> / Controleur
//                   financier
//                 </h2>
//                 <p
//                   className={`${styles.serviceDescription} ${barlow.className}`}
//                 >
//                   Renforcement de votre equipe par une presence a temps partiel
//                   dans vos locaux.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.bordersHexagon2}>
//             <div className={styles.hexagon}>
//               <div className={styles.contentContainer}>
//                 <p className={`${styles.serviceNumber} ${barlow.className}`}>
//                   02
//                 </p>
//                 <h2 className={`${styles.serviceTitle} ${barlow.className}`}>
//                   <span className={styles.colored}>Rentabilité</span> & Gestion
//                   des risques
//                 </h2>
//                 <p
//                   className={`${styles.serviceDescription} ${barlow.className}`}
//                 >
//                   Analyse de la chaine de valeur et de la rentabilité. <br></br>
//                   Gestion des risques & amelioration de l efficacite
//                   operationnelle.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.bordersHexagon3}>
//             <div className={styles.hexagon}>
//               <div className={styles.contentContainer}>
//                 <p className={`${styles.serviceNumber} ${barlow.className}`}>
//                   03
//                 </p>
//                 <h2 className={`${styles.serviceTitle} ${barlow.className}`}>
//                   <span className={styles.colored}>Gestion</span> de projet
//                 </h2>
//                 <p
//                   className={`${styles.serviceDescription} ${barlow.className}`}
//                 >
//                   Creation, implementation et deploiement de solutions et de
//                   processus sur mesure. <br></br>
//                   Developpement logiciels metiers.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className={styles.bordersHexagon4}>
//             <div className={styles.hexagon}>
//               <div className={styles.contentContainer}>
//                 <p className={`${styles.serviceNumber} ${barlow.className}`}>
//                   04
//                 </p>
//                 <h2 className={`${styles.serviceTitle} ${barlow.className}`}>
//                   <span className={styles.colored}>
//                     Planification financiere
//                   </span>{' '}
//                   & business plan
//                 </h2>
//                 <p
//                   className={`${styles.serviceDescription} ${barlow.className}`}
//                 >
//                   Vision stratégique et financiere sur 3/5ans + accompagnement
//                   financements.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Conteneurs version mobile */}
//           <div className={styles.mobileCard1}>
//             <div className={styles.contentContainer}>
//               <h2 className={`${styles.serviceTitle} ${barlow.className}`}>
//                 <span className={styles.colored}>CFO</span> / Controleur
//                 financier
//               </h2>
//               <p className={`${styles.serviceDescription} ${barlow.className}`}>
//                 Renforcement de votre équipe par une presence a temps partiel
//                 dans vos locaux
//               </p>
//             </div>
//           </div>
//           <div className={styles.mobileCard2}>
//             <div className={styles.contentContainer}>
//               <h2 className={`${styles.serviceTitle} ${barlow.className}`}>
//                 <span className={styles.colored}>Rentabilite</span> & gestion
//                 des risques
//               </h2>
//               <p className={`${styles.serviceDescription} ${barlow.className}`}>
//                 Analyse de la chaine de valeur et de la rentabilite. <br></br>
//                 Gestion des risques et amélioration de l efficacite
//                 operationnelle.
//               </p>
//             </div>
//           </div>
//           <div className={styles.mobileCard3}>
//             <div className={styles.contentContainer}>
//               <h2 className={`${styles.serviceTitle} ${barlow.className}`}>
//                 <span className={styles.colored}>Gestion</span> de projet
//               </h2>
//               <p className={`${styles.serviceDescription} ${barlow.className}`}>
//                 Creation, implementation et deploiement de solutions et de
//                 processus sur mesure. <br></br>
//                 Developpement logiciels metier.
//               </p>
//             </div>
//           </div>
//           <div className={styles.mobileCard4}>
//             <div className={styles.contentContainer}>
//               <h2 className={`${styles.serviceTitle} ${barlow.className}`}>
//                 <span className={styles.colored}>Planification financiere</span>{' '}
//                 & business plan
//               </h2>
//               <p className={`${styles.serviceDescription} ${barlow.className}`}>
//                 Vision stratégique et financiere sur 3/5ans + accompagnement
//                 financements.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className={styles.backgroundContainer}>
//           <div className={styles.imageContainer}>
//             <Image
//               className={styles.image}
//               alt="image de fond d'une map monde"
//               src={map}
//               placeholder="blur"
//               quality={100}
//               fill
//               sizes="100vw"
//             ></Image>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import styles from './V3Services.module.scss';
import Image from 'next/image';
import map from '../../../../public/world-map.png';
import { barlow } from '@/styles/font';
import Button from '@/components/Buttons/Button';

export default function V3Services() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.mainContainer}>
        <div className={styles.topInformationsContainer}>
          <h2 className={`${styles.title} ${barlow.className}`}>
            <span className={styles.colored}>Mon role,</span> Mes services
          </h2>
          <p className={`${styles.description} ${barlow.className}`}>
            En tant que consultant, mon role sera de mettre en place les
            strategies et outils necessaires a l atteinte de vos objectifs ainsi
            que ceux de vos clients, dans le but d optimiser vos ressources tout
            en accompagnant vos equipes
          </p>
          <div className={styles.buttonContainer}>
            <Button label="Learn more" variant="primary" />
          </div>
        </div>

        {/* Conteneurs version mobile */}
        <div className={styles.mobileCardsContainer}>
          <div className={styles.mobileCard1}>
            <div className={styles.bordersHexagon1}>
              <div className={styles.hexagon}>
                <p className={`${styles.serviceNumber} ${barlow.className}`}>
                  01
                </p>
              </div>
            </div>
            <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
              <span className={styles.colored}>CFO /</span> Controleur financier
            </h3>
            <p className={`${styles.serviceDescription} ${barlow.className}`}>
              Renforcement de votre équipe par une présence à temps partiel dans
              vos locaux.
            </p>
          </div>

          <div className={styles.mobileCard2}>
            <div className={styles.bordersHexagon2}>
              <div className={styles.hexagon}>
                <p className={`${styles.serviceNumber} ${barlow.className}`}>
                  02
                </p>
              </div>
            </div>
            <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
              <span className={styles.colored}>Rentabilité</span> & gestion des
              risques
            </h3>
            <p className={`${styles.serviceDescription} ${barlow.className}`}>
              Analyse de la chaine de valeur et de la rentabilité. <br></br>
              Gestion des risques et amélioration de l efficacité
              opérationnelle.
            </p>
          </div>

          <div className={styles.mobileCard3}>
            <div className={styles.bordersHexagon3}>
              <div className={styles.hexagon}>
                <p className={`${styles.serviceNumber} ${barlow.className}`}>
                  03
                </p>
              </div>
            </div>
            <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
              <span className={styles.colored}>Gestion</span> de projet
            </h3>
            <p className={`${styles.serviceDescription} ${barlow.className}`}>
              Création, implémentation et déploiement de solutions et de
              processus sur mesure. <br></br>
              Développement logiciels métiers.
            </p>
          </div>

          <div className={styles.mobileCard4}>
            <div className={styles.bordersHexagon4}>
              <div className={styles.hexagon}>
                <p className={`${styles.serviceNumber} ${barlow.className}`}>
                  04
                </p>
              </div>
            </div>
            <h3 className={`${styles.serviceTitle} ${barlow.className}`}>
              <span className={styles.colored}>Planification financière</span>&
              business plan
            </h3>
            <p className={`${styles.serviceDescription} ${barlow.className}`}>
              Vision stratégique et financière sur 3/5 ans et accompagnement
              financements.
            </p>
          </div>

          <div className={styles.buttonContainer}>
            <Button label="Learn more" variant="primary" />
          </div>
        </div>

        <div className={styles.backgroundContainer}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              alt="image de fond d'une map monde"
              src={map}
              placeholder="blur"
              quality={100}
              fill
              sizes="100vw"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
