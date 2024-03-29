import React from 'react';
import sary from './img/2.jpg';

const Cv = () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title></title>
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet" />
        <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="vendor/devicons/css/devicons.min.css" rel="stylesheet" />
        <link href="vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet" />
        <link href="css/resume.min.css" rel="stylesheet" />
      </head>
      <body id="page-top">
        
      <nav className="navbar navbar-expand-lg navbar-dark" id="sideNav" style={{ padding: '0 20px', backgroundColor: '#333f48', width: '300px', position: 'fixed', right: 0, height: '100vh', zIndex: 1000 }}>
  <a className="navbar-brand js-scroll-trigger" href="/page-top">
    <span className="d-block d-lg-none">Votre Nom</span>
    <span className="d-none d-lg-block">
      <img src={sary} className="img-fluid img-profile rounded-circle mx-auto mb-2" alt="Profile" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
    </span>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav navbar-nav-scroll">
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#about">
          <i className="fas fa-user mr-2"></i> À PROPOS
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#experience">
          <i className="fas fa-graduation-cap mr-2"></i> FORMATIONS
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#education">
          <i className="fas fa-language mr-2"></i> LANGUES
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#skills">
          <i className="fas fa-briefcase mr-2"></i> EXPÉRIENCE
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#interests">
          <i className="fas fa-tools mr-2"></i> COMPÉTENCES
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#awards">
          <i className="fas fa-trophy mr-2"></i> INTÉRÊTS
        </a>
      </li>
    </ul>
  </div>
</nav>

            <div class="container-fluid p-1">

              <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                <div class="my-auto">
                  <h1 class="mb-0">ANDRIAMIANDRISOA Tsiriandoniaina 
                    <span class="text-primary">Emmanuël</span>
                  </h1>
                  <div class="subheading mb-5">Morondava 619. Morima . Lot 162-TS <space />    
                    <a href="mailto:a.tsiry.emmanueel@email.com">  a.tsiry.emmanuel@email.com</a>
                  </div>
                  <p class="mb-5">Etudiant en cours de préparation mémoire fin d’étude en informatique à l’Institut Supérieur Chatholique du Menabe Niveau licence III</p>
                  <ul class="list-inline list-social-icons mb-0">
                    <li class="list-inline-item">
                      <a href="/">
                        <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="/">
                        <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-phone fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="/">
                        <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="/">
                        <span class="fa-stack fa-lg">
                          <i class="fa fa-circle fa-stack-2x"></i>
                          <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

             
              <section class="resume-section" id="experience">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-12">
                        <h2 class="section-heading mb-4">FORMATIONS</h2>
                        <table class="table table-hover">
                          <thead class="thead-dark">
                            <tr>
                              <th scope="col">Année</th>
                              <th scope="col">Formation</th>
                              <th scope="col">Lieu</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2023 - 2024</td>
                              <td>En cours d'obtention du diplôme de licence en informatique</td>
                              <td>Morondava</td>
                            </tr>
                            <tr>
                              <td>2019 - 2020</td>
                              <td>Diplôme de Baccalauréat</td>
                              <td>Morondava</td>
                            </tr>
                            <tr>
                              <td>2015 - 2016</td>
                              <td>Diplôme de BEPC</td>
                              <td>Morondava</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                    <div class="my-auto">
                      <h2 class="mb-5">LANGUES</h2>
                      <table class="table table-hover">
                        <thead class="thead-dark">
                          <tr>
                            <th scope="col">Langue</th>
                            <th scope="col">Niveau</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><strong>Anglais</strong></td>
                            <td>Niveau intermédiaire</td>
                          </tr>
                          <tr>
                            <td><strong>Français</strong></td>
                            <td>Niveau intermédiaire</td>
                          </tr>
                          <tr>
                            <td><strong>Malgache</strong></td>
                            <td>Lu, écrit et parlé couramment</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

              <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                  <h2 class="mb-5">EXPERIENCE PROFESSIONNELLES</h2>
                 <p>Du 03 Octobre 2023 - 31 Novembre 2023 Stage d'analyse organisé <br/> au radio
                 <strong> FANASIA Diosezy Morondava</strong><br/>
                 <strong>Poste occupé:  </strong>Technicien
                 </p>
               
                
              </section>
              <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
  <div class="my-auto">
    <h2 class="mb-5">COMPETENCES INFORMATIQUES</h2>
    <div class="row">
      <div class="col-md-6">
        <div class="skill d-flex align-items-center mb-3">
          <i class="fas fa-drafting-compass fa-2x text-primary mr-3"></i>
          <div>
            <h5>Conception</h5>
            <p class="mb-0">Merise, UML</p>
          </div>
        </div>
        <div class="skill d-flex align-items-center mb-3">
          <i class="fas fa-code fa-2x text-primary mr-3"></i>
          <div>
            <h5>Content Management System</h5>
            <p class="mb-0">WordPress, Bootstrap, Firebase, Git/GitHub, Microsoft Office (Word, Excel, PowerPoint, Access, Project), NodeJS, Merise, MySQL, VisualParadigm, Web (HTML et CSS), Visual Studio Code</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="skill d-flex align-items-center mb-3">
          <i class="fas fa-layer-group fa-2x text-primary mr-3"></i>
          <div>
            <h5>Frameworks et librairies</h5>
            <p class="mb-0">Bootstrap, ReactJs, Jquery, Laravel</p>
          </div>
        </div>
        <div class="skill d-flex align-items-center mb-3">
          <i class="fas fa-project-diagram fa-2x text-primary mr-3"></i>
          <div>
            <h5>Méthode de travail</h5>
            <p class="mb-0">Agile/SCRUM</p>
          </div>
        </div>
        <div class="skill d-flex align-items-center mb-3">
          <i class="fas fa-database fa-2x text-primary mr-3"></i>
          <div>
            <h5>Système Gestion Base de Données Relationnel</h5>
            <p class="mb-0">Agile/SCRUM</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
              <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
                <div class="my-auto">
                  <h2 class="mb-5">CENTRES D'INTERTS</h2>
                  <ul class="fa-ul mb-0">
                    <li>
                      Sports: basketball,boxe et football
                    </li>
                    <li>
                      Passion : la lecture ,la politique, le cinéma,écoute podcast etles technologies informatiques
                     </li>
                    
                  </ul>
                </div>
              </section>

            </div>

            
            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

            
            <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

           
            <script src="js/resume.min.js"></script>

          </body>
         
          </>
        );
      }

export default Cv;
