import { createSignal } from "solid-js";
import { invoke } from "@tauri-apps/api/core";

function App() {
  const [greetMsg, setGreetMsg] = createSignal("");
  const [name, setName] = createSignal("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name: name() }));
  }

  return (
    <div class='body'>
      <div p-5>
        <h1 m-a>Welcome to Tauri!</h1>
        <div class="row">
          <a href="https://vitejs.dev" target="_blank">
            <img icon src="/vite.svg" alt="Vite logo" />
          </a>
          <a href="https://tauri.app" target="_blank">
            <img icon src="/tauri.svg" alt="Tauri logo" />
          </a>
        </div>
        <p>Click on the Tauri, Vite, and Solid logos to learn more.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet</button>
        </form>
        <p>{greetMsg()}</p>
      </div>
    </div>
  );
}

export default App;
