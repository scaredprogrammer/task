import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import './tabs.css';
import Sonnet from './Sonnet';
import {FcSalesPerformance,FcRules,FcLibrary,FcLock,FcAbout,FcContacts,FcInspection,FcSynchronize,FcCalendar,FcMindMap} from 'react-icons/fc';
import {VscLaw} from 'react-icons/vsc'
import {MdNotificationsActive} from 'react-icons/md';
function TabsMain() {
  return (
    <Tab.Container className="left-tabs-example" defaultActiveKey="first">
      <Row className='wrapper'>
        <div  className='colone'>
          <Nav variant="pills" className="flex-column nav" >
            <Nav.Item>
              <Nav.Link eventKey="first"><FcLibrary/><span>G S T Library</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second"><FcLock/><span>Login | Register</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third"><FcAbout/><span>About G S T Library</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth"><FcContacts/><span>Contact Us</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth"><FcInspection/><span>Subscription</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth"><FcSynchronize/><span>G S T Updates</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="seventh"><FcCalendar/><span>G S T Calender</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="eighth"><VscLaw/><span>G S T Case Laws</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ninth"><FcMindMap/><span>G S T Case Laws Sitemap</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tenth"><MdNotificationsActive/><span>G S T Notification</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="eleventh"><FcRules/><span>G S T Act/Rules</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="twelth"><FcSalesPerformance/><span>G S T Rates</span></Nav.Link>
            </Nav.Item>
            {/*<Nav.Item>
              <Nav.Link eventKey="thirteenth">G S T Case Laws</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourteenth">G S T Case Laws</Nav.Link>
            </Nav.Item>
             <Nav.Item>
              <Nav.Link eventKey="eighth">G S T Case Laws</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="eighth">G S T Case Laws</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="eighth">G S T Case Laws</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="eighth">G S T Case Laws</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="eighth">G S T Case Laws</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="eighth">G S T Case Laws</Nav.Link>
            </Nav.Item> */}
          </Nav>
        </div>
        <div  className='coltwo'>
          <Tab.Content >
            <Tab.Pane eventKey="first">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="fifth">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="sixth">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="seventh">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="eighth">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="ningth">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="tenth">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="eleventh">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="twelth">
              <Sonnet />
            </Tab.Pane>
            {/*<Tab.Pane eventKey="fourteenth">
              <Sonnet />
            </Tab.Pane>
             <Tab.Pane eventKey="eighth">
              <Sonnet />
            </Tab.Pane>
            <Tab.Pane eventKey="eighth">
              <Sonnet />
            </Tab.Pane> */}
          </Tab.Content>
        </div>
      </Row>
    </Tab.Container>
  );
}


export default TabsMain;