(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(8),i=a.n(r),o=(a(15),a(9)),u=a(2),c=a(3),l=a(5),m=a(4),g=a(1),h=a(6),d=(a(16),function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"letter"},this.props.data.letter)}}]),t}(s.Component)),p=["adjacent","dimension","obedient","accumulate","drastic","oblivious","adapt","elaborate","origin","adequate","encourage","peculiar","analyze","equation","persuade","anticipate","evaluate","prediction","appropriate","exaggerate","priority","artifact","exhaust","quote","benefit","expression","realistic","calculate","extend","recount","catastrophe","extensive","reinforce","chronological","factor","repetition","citizen","ferocious","retrieve","civilization","frequent","frequency","compose","genuine","solution","conclusion","government","strategy","congruent","history","substitute","consequence","hypothesis","suspense","construct","insists","tentative","continuous","irrigate","thesis","contrast","lofty","transfer","contribute","manipulate","unanimous","declare","massive","unique","democracy","narrate","variable","similar","viewpoint","violate"];a(17);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}var v="abcdefghijklmnopqrstuvwxyz".split("").map((function(e){return{letter:e,guessed:!1}})),y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={guesses:v,word:p[Math.floor(Math.random()*p.length)].split(""),guessValue:"",errorMessage:"",wrongGuesses:a.props.maxWrongGuesses,victory:!1},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(a)),a.resetGame=a.resetGame.bind(Object(g.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){var t=this.state.guessValue.toLowerCase(),a=this.state.guesses.find((function(e){return e.letter===t})),s=this.state.word.findIndex((function(e){return e===t}));!1===a.guessed&&-1===s&&this.setState((function(e){return{wrongGuesses:e.wrongGuesses-1}})),a&&!0===a.guessed?this.setState({errorMessage:"You have already guessed this letter"}):a&&!1===a.guessed?this.setState((function(e){return{errorMessage:"",guessValue:"",guesses:e.guesses.map((function(e){return e.letter===t?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{guessed:!0}):e}))}})):this.setState({errorMessage:"Please input a valid character [A-Z]"}),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState({guessValue:e.target.value})}},{key:"resetGame",value:function(){this.setState({guesses:v,word:p[Math.floor(Math.random()*p.length)].split(""),guessValue:"",errorMessage:"",wrongGuesses:this.props.maxWrongGuesses,victory:!1})}},{key:"componentDidUpdate",value:function(){for(var e=document.querySelectorAll(".Hangman-word-letter"),t="",a=0;a<e.length;a++){var s=e[a];s.innerText&&(t+=s.innerText)}t===this.state.word.join("")&&!this.state.victory&&this.state.wrongGuesses>0&&this.setState({victory:!0})}},{key:"displayHeading",value:function(){return 0===this.state.wrongGuesses?n.a.createElement("h1",{className:"Hangman-list-description",style:{color:"red"}},"You lose, try again"):n.a.createElement("h1",{className:"Hangman-list-description"},this.state.wrongGuesses," incorrect guesses left")}},{key:"displayGuesses",value:function(){return this.state.guesses.map((function(e){return e.guessed&&n.a.createElement(d,{data:e})}))}},{key:"displayForm",value:function(){var e=0===this.state.wrongGuesses,t=this.state.victory;return n.a.createElement("form",{className:"Hangman-guess",onSubmit:this.handleSubmit},n.a.createElement("label",null,"Guess a letter ",n.a.createElement("input",{type:"text",value:this.state.guessValue,onChange:this.handleChange,maxLength:"1",onKeyUp:this.handleKeyUp,disabled:e||t})),n.a.createElement("input",{type:"submit",value:"Submit",disabled:e||t}))}},{key:"generateWord",value:function(){var e=this,t=0===this.state.wrongGuesses;return this.state.word.map((function(a){return n.a.createElement("div",{className:"Hangman-word-letter"},e.state.guesses.find((function(e){return e.letter===a&&!0===e.guessed}))&&a||t&&n.a.createElement("span",{style:{color:"red"}}," ",a," "))}))}},{key:"displayGameOver",value:function(e){return e?n.a.createElement("div",{className:"Hangman-reset"},"Congratulations, you nailed it! ",n.a.createElement("a",{href:"/#",className:"Hangman-reset",onClick:this.resetGame},"Play again?")):n.a.createElement("a",{href:"/#",className:"Hangman-reset",onClick:this.resetGame},"Try again")}},{key:"render",value:function(){return n.a.createElement("div",{className:"Hangman"},this.displayHeading(),n.a.createElement("ul",{className:"Hangman-list"},this.displayGuesses()),this.displayForm(),this.state.errorMessage&&n.a.createElement("div",{className:"Hangman-error"},this.state.errorMessage),n.a.createElement("div",{className:"Hangman-word"},this.generateWord()),this.state.victory&&this.displayGameOver(!0),0===this.state.wrongGuesses&&this.displayGameOver(!1))}}]),t}(s.Component);y.defaultProps={maxWrongGuesses:6};var b=y;a(18);var w=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.15d40707.chunk.js.map