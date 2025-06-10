export default function ChannelBar() {
  return (
    <section className="channel-bar">
      <h3 className="text-lg text-gray-400">Channels</h3>
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
}
