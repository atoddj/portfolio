(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(8),i=a.n(r),o=(a(15),a(9)),u=a(2),c=a(3),l=a(5),m=a(4),h=a(1),g=a(6),d=(a(16),function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"letter"},this.props.data.letter)}}]),t}(n.Component)),p=["adjacent","dimension","obedient","accumulate","drastic","oblivious","adapt","elaborate","origin","adequate","encourage","peculiar","analyze","equation","persuade","anticipate","evaluate","prediction","appropriate","exaggerate","priority","artifact","exhaust","quote","benefit","expression","realistic","calculate","extend","recount","catastrophe","extensive","reinforce","chronological","factor","repetition","citizen","ferocious","retrieve","civilization","frequent","frequency","compose","genuine","solution","conclusion","government","strategy","congruent","history","substitute","consequence","hypothesis","suspense","construct","insists","tentative","continuous","irrigate","thesis","contrast","lofty","transfer","contribute","manipulate","unanimous","declare","massive","unique","democracy","narrate","variable","similar","viewpoint","violate"];a(17);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var v=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={guesses:a.formatData(a.props.alphabet),word:p[Math.floor(Math.random()*p.length)].split(""),guessValue:"",errorMessage:"",wrongGuesses:a.props.maxWrongGuesses,victory:!1},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.resetGame=a.resetGame.bind(Object(h.a)(a)),a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"formatData",value:function(e){return e.map((function(e,t){return{letter:e,guessed:!1}}))}},{key:"handleSubmit",value:function(e){var t=this.state.guessValue.toLowerCase(),a=this.state.guesses.find((function(e){return e.letter===t})),n=this.state.word.findIndex((function(e){return e===t}));!1===a.guessed&&-1===n&&this.setState((function(e){return{wrongGuesses:e.wrongGuesses-1}})),a&&!0===a.guessed?this.setState({errorMessage:"You have already guessed this letter"}):a&&!1===a.guessed?(this.setState((function(e){return{guesses:e.guesses.map((function(e){return e.letter===t?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{guessed:!0}):e}))}})),this.setState({errorMessage:"",guessValue:""})):this.setState({errorMessage:"Please input a valid character [A-Z]"}),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState({guessValue:e.target.value})}},{key:"resetGame",value:function(){this.setState({guesses:this.formatData(this.props.alphabet),word:p[Math.floor(Math.random()*p.length)].split(""),guessValue:"",errorMessage:"",wrongGuesses:this.props.maxWrongGuesses,victory:!1})}},{key:"componentDidUpdate",value:function(){for(var e=document.querySelectorAll(".Hangman-word-letter"),t="",a=0;a<e.length;a++){var n=e[a];n.innerText&&(t+=n.innerText)}JSON.stringify(t.split(""))!==JSON.stringify(this.state.word)||this.state.victory||this.setState({victory:!0})}},{key:"render",value:function(){var e=this,t=0===this.state.wrongGuesses,a=this.state.victory;return s.a.createElement("div",{className:"Hangman"},t?s.a.createElement("h1",{className:"Hangman-list-description",style:{color:"red"}},"You lose, try again"):s.a.createElement("h1",{className:"Hangman-list-description"},this.state.wrongGuesses," incorrect guesses left"),s.a.createElement("ul",{className:"Hangman-list"},this.state.guesses.map((function(e){return e.guessed&&s.a.createElement(d,{data:e})}))),s.a.createElement("form",{className:"Hangman-guess",onSubmit:this.handleSubmit},s.a.createElement("label",null,"Guess a letter ",s.a.createElement("input",{type:"text",value:this.state.guessValue,onChange:this.handleChange,maxLength:"1",onKeyUp:this.handleKeyUp,disabled:t||a})),s.a.createElement("input",{type:"submit",value:"Submit",disabled:t||a})),this.state.errorMessage&&s.a.createElement("div",{className:"Hangman-error"},this.state.errorMessage),s.a.createElement("div",{className:"Hangman-word"},this.state.word.map((function(a){return s.a.createElement("div",{className:"Hangman-word-letter"},e.state.guesses.find((function(e){return e.letter===a&&!0===e.guessed}))&&a||t&&s.a.createElement("span",{style:{color:"red"}}," ",a," "))}))),t&&s.a.createElement("a",{href:"/#",className:"Hangman-reset",onClick:this.resetGame},"Try again"),a&&s.a.createElement("div",{className:"Hangman-reset"},"Congratulations, you nailed it! ",s.a.createElement("a",{href:"/#",className:"Hangman-reset",onClick:this.resetGame},"Play again?")))}}]),t}(n.Component);v.defaultProps={alphabet:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],maxWrongGuesses:6};var b=v;a(18);var y=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.a56d4aa8.chunk.js.map