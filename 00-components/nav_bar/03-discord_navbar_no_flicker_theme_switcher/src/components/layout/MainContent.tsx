import Button from "@/components/ui/Button";

const MainContent: React.FC = () => {
  return (
    <section className="main-content">
      <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Button Variants</h2>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <h3 className="col-span-3 text-lg font-semibold">Filled</h3>
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

        <div className="grid grid-cols-3 gap-4 mb-8">
          <h3 className="col-span-3 text-lg font-semibold">Outline</h3>
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

        <div className="grid grid-cols-3 gap-4 mb-8">
          <h3 className="col-span-3 text-lg font-semibold">Ghost</h3>
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
    </section>
  );
};

export default MainContent;
