import Button from "@/components/ui/Button";
import styles from "./MainContent.module.css";

import Tooltip from "@/components/ui/Tooltip";

const MainContent: React.FC = () => {
  return (
    <section className={`main-content ${styles.mainContent}`}>
      <h2 className="text-xl font-bold">Button Variants</h2>
      <div className="button-component">
        <article className="button-container">
          <h3 className="text-lg font-semibold">Filled</h3>
          <div className="button-list">
            <Tooltip content="Tooltip top" placement="top">
              <Button variant="primary" mode="filled">
                Primary
              </Button>
            </Tooltip>
            <Tooltip content="Tooltip bottom" placement="bottom">
              <Button variant="neutral" mode="filled">
                Neutral
              </Button>
            </Tooltip>
            <Tooltip content="Tooltip left" placement="left">
              <Button variant="success" mode="filled">
                Success
              </Button>
            </Tooltip>
            <Tooltip content="Tooltip right" placement="right">
              <Button variant="error" mode="filled">
                Error
              </Button>
            </Tooltip>
            <Tooltip content="Tooltip top" placement="top">
              <Button variant="info" mode="filled">
                Info
              </Button>
            </Tooltip>
          </div>
        </article>

        <article className="button-container">
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
        </article>

        <article className="button-container">
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
        </article>
      </div>
    </section>
  );
};

export default MainContent;
