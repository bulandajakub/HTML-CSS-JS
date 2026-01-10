import React from "react";
import styles from "./ChannelBar.module.css";

const ChannelBar: React.FC = () => {
  return (
    <section className={`channel-bar ${styles.channelBar}`}>
      <h3 className={`channelbar-title ${styles.channelbarTitle}`}>Channels</h3>
      <aside>
        <details>
          <summary>Topics</summary>
          <ul>
            <li>tailwind_css</li>
            <li>react</li>
          </ul>
        </details>
      </aside>
      <aside>
        <details>
          <summary>Questions</summary>
          <ul>
            <li>jit_compilation</li>
            <li>purge_files</li>
            <li>dark_mode</li>
          </ul>
        </details>
      </aside>
      <aside>
        <details>
          <summary>Random</summary>
          <ul>
            <li>variants</li>
            <li>plugins</li>
          </ul>
        </details>
      </aside>
    </section>
  );
};

export default ChannelBar;
