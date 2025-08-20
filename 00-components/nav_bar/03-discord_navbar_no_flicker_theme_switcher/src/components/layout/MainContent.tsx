import Button from "@/components/ui/Button";

const MainContent: React.FC = () => {
  return (
    <section className="main-content">
      <h2 className="text-xl font-bold">Button Variants</h2>
      <div className="button-component">
        <div className="button-container">
          <h3 className="text-lg font-semibold">Filled</h3>
          <div className="button-list">
            <Button variant="primary" mode="filled">
              Primary
            </Button>
            <Button variant="neutral" mode="filled">
              Neutral
            </Button>
            <Button variant="success" mode="filled">
              Success
            </Button>
            <Button variant="error" mode="filled">
              Error
            </Button>
            <Button variant="info" mode="filled">
              Info
            </Button>
          </div>
        </div>

        <div className="button-container">
          <h3 className="text-lg font-semibold">Outline</h3>
          <div className="button-list">
            <Button variant="primary" mode="outline">
              Primary
            </Button>
            <Button variant="neutral" mode="outline">
              Neutral
            </Button>
            <Button variant="success" mode="outline">
              Success
            </Button>
            <Button variant="error" mode="outline">
              Error
            </Button>
            <Button variant="info" mode="outline">
              Info
            </Button>
          </div>
        </div>

        <div className="button-container">
          <h3 className="text-lg font-semibold">Ghost</h3>
          <div className="button-list">
            <Button variant="primary" mode="ghost">
              Primary
            </Button>
            <Button variant="neutral" mode="ghost">
              Neutral
            </Button>
            <Button variant="success" mode="ghost">
              Success
            </Button>
            <Button variant="error" mode="ghost">
              Error
            </Button>
            <Button variant="info" mode="ghost">
              Info
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
