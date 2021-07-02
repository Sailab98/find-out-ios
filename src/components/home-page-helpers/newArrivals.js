import NewProduct from "./newProduct";
import NewProductDetails from "./newProduct";
const NewArrivals = () => {
  const newarrivals = [
    {
      header: "Project Report - April",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      meta: "ROI: 30%",
      image: "/assets/39-450x420.jpg"
    },
    {
      header: "Heading 2",
      description: "Bring to the table win-win survival strategies to ensure proactive domination.",
      meta: "ROI: 34%",
      image: "/assets/40-450x420.jpg",
      href: "www.wikipedia.com"
    },
    {
      header: "Project Report - April",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      meta: "ROI: 30%",
      image: "/assets/39-450x420.jpg"
    },
    {
      header: "Project Report - April",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      meta: "ROI: 30%",
      image: "/assets/40-450x420.jpg"
    },
    {
      header: "Project Report - April",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      meta: "ROI: 30%",
      image: "/assets/39-450x420.jpg"
    },
    {
      header: "Project Report - April",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      meta: "ROI: 30%",
      image: "/assets/40-450x420.jpg"
    },
    {
      header: "Project Report - April",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      meta: "ROI: 30%",
      image: "/assets/39-450x420.jpg"
    },
    {
      header: "Project Report - April",
      description:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews.",
      meta: "ROI: 30%",
      image: "/assets/40-450x420.jpg"
    }
  ];
  return (
    <>
      <div className="row">
        <div className="column">
          <div className="ui stackable grid">
            <div className="four column row" style={{ rowGap: "2em" }}>
              {newarrivals.map((newproduct, i) => (
                <div className="column">
                  <NewProductDetails key={i} data={newproduct} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewArrivals;
