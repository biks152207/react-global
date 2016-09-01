import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div id="wrapper">

      <header>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><img src="/build/logo-fall.jpg"/></a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Sports</a></li>
                <li><a href="#">In-Play</a></li>
                <li><a href="#">Casino</a></li>
                <li><a href="#">Poker</a></li>
                <li><a href="#">Bingo</a></li>
                <li><a href="#">DFS</a></li>


              </ul>
              <form className="navbar-form navbar-right">
              <a href="javascript:void(0)">Join Now</a>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Username"/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-success">Login</button>
              </form>
            </div>
          </div>
        </nav>
        <div className="sub-nav">
          <div className="container-fluid">
            <ul className="list-inline subnav-left pull-left">
              <li><a className="active" href="#">Lobby</a></li>
              <li><a href="#">Upcoming</a></li>
              <li><a href="#">Live</a></li>
              <li><a href="#">Completed</a></li>
            </ul>
            <ul className="list-inline subnav-right pull-right">
              <li><a href="#"><i className="fa fa-question-circle-o"></i></a></li>
              <li><a href="#"><i className="fa fa-user"></i></a></li>
            </ul>
          </div>
        </div>
      </header>

      <div id="content">

        <article className="ads-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5">
                <div className="first-ad">
                  <div className="row">
                    <div className="col-md-7">
                      <h3>Playin in a H2H Contest</h3>
                      <p>Limit your opponents to players of similar skill or challenge everyone!</p>
                    </div>
                    <div className="col-md-5">
                      <button className="btn btn-orange">Match Me in a H2H</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="second-ad">
                  <div className="row">
                    <div className="col-md-7">
                      <h3>Build a Lineup</h3>
                      <p>Select your sport, when to play, then build a lineup tp crush the opposition.</p>
                    </div>
                    <div className="col-md-5">
                      <button className="btn btn-orange">Build a Lineup</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="third-ad">
                  <p>My Contest Overview</p>
                  <table>
                    <tr>
                      <td>Contests Entered:</td>
                      <td className="text-right">1000</td>
                    </tr>
                    <tr>
                      <td>Cash in Play:</td>
                      <td className="text-right">$10,500</td>
                    </tr>
                    <tr>
                      <td>Currently Winning:</td>
                      <td className="text-right">$10M</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </article>

        <section className="tabs-lobby">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-10">
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Featured<i className="fa fa-star"></i></a></li>
                  <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Football<i className="fa fa-futbol-o "></i></a></li>
                  <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Gold<i className="fa fa-futbol-o "></i></a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Tennis<i className="fa fa-futbol-o "></i></a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Cricket<i className="fa fa-futbol-o "></i></a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Racing<i className="fa fa-futbol-o "></i></a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Rugby<i className="fa fa-futbol-o "></i></a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Rugby<i className="fa fa-futbol-o "></i></a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Rugby<i className="fa fa-futbol-o "></i></a></li>
                  <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">More<i className="fa fa-futbol-o "></i></a></li>
                </ul>

                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane active" id="home">
                    <table className="table table-lobby">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Contest name</th>
                          <th>Fee</th>
                          <th>Prizes <i className="fa fa-caret-down"></i></th>
                          <th>ENTRIES <i className="fa fa-info-circle"></i></th>
                          <th>Starts (et)</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><i className="fa fa-futbol-o"></i></td>
                          <td>
                            <p><strong>$10 MILLION</strong> Football EPL Cup Finals</p>
                          <a href="">Salary Cap</a> <a href="">GPP</a> <a href="">Multi Entry(100)</a>
                        </td>
                        <td>$10,500</td>
                        <td>$10,000,000</td>
                        <td className="entities in">519856/100K <i className="fa fa-check-circle"></i></td>
                        <td>07/24 12:00pm</td>
                        <td><button className="btn btn-success">Enter</button></td>
                        </tr>
                        <tr>
                          <td><i className="fa fa-futbol-o"></i></td>
                          <td>
                            <p><strong>$10 MILLION</strong> Football EPL Cup Finals</p>
                          <a href="">Salary Cap</a> <a href="">GPP</a> <a href="">Multi Entry(100)</a>
                        </td>
                        <td>$10,500</td>
                        <td>$10,000,000</td>
                        <td className="entities in">519856/100K <i className="fa fa-check-circle"></i></td>
                        <td>07/24 12:00pm</td>
                        <td><button className="btn btn-success">Enter</button></td>
                        </tr>
                        <tr>
                          <td><i className="fa fa-futbol-o"></i></td>
                          <td>
                            <p><strong>$10 MILLION</strong> Football EPL Cup Finals</p>
                          <a href="">Salary Cap</a> <a href="">GPP</a> <a href="">Multi Entry(100)</a>
                        </td>
                        <td>$10,500</td>
                        <td>$10,000,000</td>
                        <td className="entities">519856/100K <i className="fa fa-check-circle"></i></td>
                        <td>07/24 12:00pm</td>
                        <td><button className="btn btn-success">Enter</button></td>
                        </tr>

                        <tr>
                          <td><i className="fa fa-futbol-o"></i></td>
                          <td>
                            <p><strong>$10 MILLION</strong> Football EPL Cup Finals</p>
                          <a href="">Salary Cap</a> <a href="">GPP</a> <a href="">Multi Entry(100)</a>
                        </td>
                        <td>$10,500</td>
                        <td>$10,000,000</td>
                        <td className="entities in">519856/100K <i className="fa fa-check-circle"></i></td>
                        <td>07/24 12:00pm</td>
                        <td><button className="btn btn-success">Add Entry</button></td>
                        </tr>
                        <tr>
                          <td><i className="fa fa-futbol-o"></i></td>
                          <td>
                            <p><strong>$10 MILLION</strong> Football EPL Cup Finals</p>
                          <a href="">Salary Cap</a> <a href="">GPP</a> <a href="">Multi Entry(100)</a>
                        </td>
                        <td>$10,500</td>
                        <td>$10,000,000</td>
                        <td className="entities">519856/100K <i className="fa fa-check-circle"></i></td>
                        <td>07/24 12:00pm</td>
                        <td><button className="btn btn-success">Max Entries</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div role="tabpanel" className="tab-pane" id="profile">...</div>
                  <div role="tabpanel" className="tab-pane" id="messages">...</div>
                  <div role="tabpanel" className="tab-pane" id="settings">...</div>
                </div>
              </div>

              <div className="col-md-2">
                <div id="sidebar" className="next-contest-starts-time">
                  <div className="timer-start">
                    <h4>Next Contest Starts:</h4>
                    <h3>2:34:23</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <footer>
        <div className="container text-center">
          <img src="/build/logo-fall2.jpg"/>
          <ul className="list-inline footer-list">
            <li><a href="#">Help</a></li>
            <li><a href="#">Banking</a></li>
            <li><a href="#">Responsible Gaming</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
          <img src="/build/footer-logo-list.jpg"/>
        </div>
      </footer>
    </div>
    );
  }
}
export default App;
