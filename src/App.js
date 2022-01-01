import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Card from './Card';

function App() {
  let list = [
    {
      level : "BASIC",
      members : "3-5",
      price : 28,
      saving : 20,
      button : "btn btn-success-gradiant btn-md text-white btn-block",
      features : [
        {
          content : "Perfect of Small Team"
        },
        {
          content : "Unlimited Invoices"
        },
        {
          content : "Project Management"
        },
        {
          content : ""
        },
        {
          content : ""
        }
      ]
    },
    {
      level : "INTERMEDIATE",
      members : "5-10",
      price : 39,
      saving : 30,
      button : "btn btn-danger-gradiant btn-md text-white btn-block",
      features : [
        {
          content : "Perfect of Small Team"
        },
        {
          content : "Unlimited Invoices"
        },
        {
          content : "Project Management"
        },
        {
          content : "Team Management"
        },
        {
          content : ""
        }
      ]
    },
    {
      level : "HIGH className",
      members : "10-25",
      price : 58,
      saving : 50,
      button : "btn btn-success-gradiant btn-md text-white btn-block",
      features : [
        {
          content : "Perfect of Small Team"
        },
        {
          content : "Unlimited Invoices"
        },
        {
          content : "Project Management"
        },
        {
          content : "Team Management"
        },
        {
          content : "Time Tracking"
        }
      ]
    },
    {
      level : "SUPREME",
      members : "25-100",
      price : 99,
      saving : 80,
      button : "btn btn-success-gradiant btn-md text-white btn-block",
      features : [
        {
          content : "Perfect of Small Team"
        },
        {
          content : "Unlimited Invoices"
        },
        {
          content : "Project Management"
        },
        {
          content : "Team Management"
        },
        {
          content : "Time Tracking"
        }
      ]
    }
  ]
  return (
    <div className="pricing1 py-5 bg-light">
  <div className="container">
      <Title/>
      <div className="row mt-5">
        {
          list.map((elem)=><Card data={elem}></Card>)
        }
      </div>
      </div>
    </div>
  );
}

export default App;
