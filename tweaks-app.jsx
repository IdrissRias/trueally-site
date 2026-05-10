// Tweaks panel for TrueAlly
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#C62828",
  "navyColor": "#111111",
  "headlineStyle": "Confident",
  "showCallouts": true
}/*EDITMODE-END*/;

const HEADLINES = {
  "Confident": <>We make sure your customers <span className="accent">pay you.</span></>,
  "Direct":    <>Stop chasing invoices. <span className="accent">Start running your business.</span></>,
  "Warm":      <>Your dedicated AR team. <span className="accent">Their dedicated relationship.</span></>,
};

const TweaksApp = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accentColor);
    document.documentElement.style.setProperty('--navy', tweaks.navyColor);
    const h1 = document.querySelector('.hero h1');
    if (h1 && HEADLINES[tweaks.headlineStyle]) {
      // Use ReactDOM render is overkill — simplest: set innerHTML reflecting the option
      const map = {
        "Confident": 'We make sure your customers <span class="accent">pay you.</span>',
        "Direct":    'Stop chasing invoices. <span class="accent">Start running your business.</span>',
        "Warm":      'Your dedicated AR team. <span class="accent">Their dedicated relationship.</span>',
      };
      h1.innerHTML = map[tweaks.headlineStyle];
    }
    document.querySelectorAll('.callout').forEach(el => {
      el.style.display = tweaks.showCallouts ? '' : 'none';
    });
  }, [tweaks]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Headline">
        <TweakSelect
          label="Style"
          value={tweaks.headlineStyle}
          onChange={(v) => setTweak('headlineStyle', v)}
          options={["Confident", "Direct", "Warm"]}
        />
      </TweakSection>
      <TweakSection title="Color">
        <TweakColor
          label="Accent"
          value={tweaks.accentColor}
          onChange={(v) => setTweak('accentColor', v)}
          presets={["#C62828", "#8E0000", "#E8752A", "#0D9488", "#6366F1"]}
        />
        <TweakColor
          label="Primary"
          value={tweaks.navyColor}
          onChange={(v) => setTweak('navyColor', v)}
          presets={["#111111", "#1F1F1F", "#0F1E3D", "#0C0A09", "#1F2937"]}
        />
      </TweakSection>
      <TweakSection title="Hero visual">
        <TweakToggle
          label="Show floating callouts"
          value={tweaks.showCallouts}
          onChange={(v) => setTweak('showCallouts', v)}
        />
      </TweakSection>
    </TweaksPanel>
  );
};

window.TweaksApp = TweaksApp;
