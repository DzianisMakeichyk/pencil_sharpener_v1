<template>
    <div>
        <main>
            <div class="sections">
                <header class="sections__header">
                    <h1 class="title">Outdoors</h1>
                </header>

                <!-- facts expander with toggles; content for each is in its section -->
                <div class="facts">
                    <div class="facts__toggle">
                    <span class="facts__toggle-inner facts__toggle-inner--more">
                        <svg class="icon icon--dot"><use xlink:href="#icon-dot"></use></svg>
                        <span class="facts__toggle-text">See more facts</span>
                    </span>
                    <span class="facts__toggle-inner facts__toggle-inner--less">
                        <svg class="icon icon--cross"><use xlink:href="#icon-cross"></use></svg>
                        <span class="facts__toggle-text">See less facts</span>
                    </span>
                    </div>
                    <button class="button-contentclose">
                        <svg class="icon icon--close"><use xlink:href="#icon-close"></use></svg>
                    </button>
                </div>
                <!-- index -->
                <div class="sections__index">
                <span class="sections__index-current">
                    <span class="sections__index-inner">01</span>
                </span>
                    <span class="sections__index-total">04</span>
                </div>
                <!-- navigation down -->
                <nav class="sections__nav">
                    <button class="sections__nav-item sections__nav-item--prev">
                        <svg class="icon icon--navup"><use xlink:href="#icon-navup"></use></svg>
                    </button>
                    <button class="sections__nav-item sections__nav-item--next">
                        <svg class="icon icon--navdown"><use xlink:href="#icon-navdown"></use></svg>
                    </button>
                </nav>
                <!-- sections -->
                <section class="section section--current">
                    <div class="section__content">
                        <h2 class="section__title">Hiking</h2>
                        <p class="section__description"><span class="section__description-inner">Hiking is the preferred term, in Canada and the United States, for a long, vigorous walk, usually on trails (footpaths), in the countryside, while the word walking is used for shorter, particularly urban walks.</span></p>
                    </div>
                    <div class="section__img">
                        <div class="section__img-inner" style="background-image: url(img/1.jpg)"></div>
                    </div>
                    <div class="section__more">
                        <div class="section__more-inner section__more-inner--bg1">
                            <span class="section__more-text">Want to know more?</span>
                            <a href="#" class="section__more-link">
                                <span class="section__more-linktext">Explore all hikes</span>
                                <svg class="icon icon--arrowlong"><use xlink:href="#icon-arrowlong"></use></svg>
                            </a>
                        </div>
                    </div>
                    <div class="section__expander"></div>
                    <ul class="section__facts">
                        <li class="section__facts-item">
                            <h3 class="section__facts-title">Biggest lake</h3>
                            <span class="section__facts-detail">Caspian sea in Kazakhstan</span>
                        </li>
                        <li class="section__facts-item">
                            <h3 class="section__facts-title">Coolest activity</h3>
                            <span class="section__facts-detail">Kayaking the whole lake</span>
                        </li>
                        <li class="section__facts-item">
                            <h3 class="section__facts-title">Lake depth</h3>
                            <span class="section__facts-detail">With 55m it's the deepest</span>
                        </li>
                        <li class="section__facts-item section__facts-item--clickable" data-gallery="gallery1">
                            <div class="section__facts-img">
                                <img src="img/thumb1.jpg" alt="Some image"/>
                                <svg class="icon icon--grid"><use xlink:href="#icon-grid"></use></svg>
                            </div>
                            <h3 class="section__facts-title">More impressions</h3>
                            <span class="section__facts-detail">A collection of images</span>
                        </li>
                    </ul>
                    <div class="section__gallery" id="gallery1">
                        <h3 class="section__gallery-item section__gallery-item--title">More impressions</h3>
                        <a class="section__gallery-item" href="#"><img src="img/thumb1.jpg" alt="Some image"/></a>
                        <a class="section__gallery-item" href="#"><img src="img/thumb2.jpg" alt="Some image"/></a>
                        <a class="section__gallery-item" href="#"><img src="img/thumb3.jpg" alt="Some image"/></a>
                        <a class="section__gallery-item" href="#"><img src="img/thumb4.jpg" alt="Some image"/></a>
                        <a class="section__gallery-item" href="#"><img src="img/thumb5.jpg" alt="Some image"/></a>
                        <a class="section__gallery-item" href="#"><img src="img/thumb6.jpg" alt="Some image"/></a>
                    </div>
                </section>
                <!--/ section -->
                <section class="section">
                    <div class="section__content">
                        <h2 class="section__title">Lakes</h2>
                        <p class="section__description"><span class="section__description-inner">A lake is an area filled with water, localized in a basin, that is surrounded by land, apart from any river or other outlet that serves to feed or drain the lake. Lakes lie on land and are not part of the ocean.</span></p>
                    </div>
                    <div class="section__img">
                        <div class="section__img-inner" style="background-image: url(img/2.jpg)"></div>
                    </div>
                    <div class="section__more">
                        <div class="section__more-inner section__more-inner--bg2">
                            <span class="section__more-text">Want to know more?</span>
                            <a href="#" class="section__more-link">
                                <span class="section__more-linktext">Explore the lakes</span>
                                <svg class="icon icon--arrowlong"><use xlink:href="#icon-arrowlong"></use></svg>
                            </a>
                        </div>
                    </div>
                    <div class="section__expander"></div>
                    <ul class="section__facts">
                        <li class="section__facts-item">
                            <h3 class="section__facts-title">Biggest lake</h3>
                            <span class="section__facts-detail">Caspian sea in Kazakhstan</span>
                        </li>
                        <li class="section__facts-item">
                            <h3 class="section__facts-title">Coolest activity</h3>
                            <span class="section__facts-detail">Kayaking the whole lake</span>
                        </li>
                        <li class="section__facts-item">
                            <h3 class="section__facts-title">Lake depth</h3>
                            <span class="section__facts-detail">With 55m it's the deepest</span>
                        </li>
                        <li class="section__facts-item section__facts-item--clickable" data-gallery="gallery2">
                            <div class="section__facts-img">
                                <img src="img/thumb2.jpg" alt="Some image"/>
                                <svg class="icon icon--grid"><use xlink:href="#icon-grid"></use></svg>
                            </div>
                            <h3 class="section__facts-title">More impressions</h3>
                            <span class="section__facts-detail">A collection of images</span>
                        </li>
                    </ul>
                    <div class="section__gallery" id="gallery2">
                        <h3 class="section__gallery-item section__gallery-item--title">More impressions</h3>
                        <a class="section__gallery-item" href="#"><img src="img/thumb5.jpg" alt="Some image"/></a>
                        <a class="section__gallery-item" href="#"><img src="img/thumb6.jpg" alt="Some image"/></a>
                        <a class="section__gallery-item" href="#"><img src="img/thumb1.jpg" alt="Some image"/></a>
                        <a class="section__gallery-item" href="#"><img src="img/thumb2.jpg" alt="Some image"/></a>
                        <a class="section__gallery-item" href="#"><img src="img/thumb3.jpg" alt="Some image"/></a>
                        <a class="section__gallery-item" href="#"><img src="img/thumb4.jpg" alt="Some image"/></a>
                    </div>
                </section><!--/ section -->
                <section class="section">
                    <div class="section__content">
                        <h2 class="section__title">Paths</h2>
                        <p class="section__description"><span class="section__description-inner">A footpath (also pedestrian way, walking trail, nature trail) is a type of thoroughfare that is intended for use only by pedestrians and not other forms of traffic such as motorized vehicles, cycles, and horses.</span></p>
                    </div>
                    <div class="section__img">
                        <div class="section__img-inner" style="background-image: url(img/3.jpg)"></div>
                    </div>
                    <div class="section__more">
                        <div class="section__more-inner section__more-inner--bg3">
                            <span class="section__more-text">Want to know more?</span>
                            <a href="#" class="section__more-link">
                                <span class="section__more-linktext">Explore the paths</span>
                                <svg class="icon icon--arrowlong"><use xlink:href="#icon-arrowlong"></use></svg>
                            </a>
                        </div>
                    </div>
                    <div class="section__expander"></div>
                    <ul class="section__facts">
                        <li class="section__facts-item">
                            <h3 class="section__facts-title">Lovely paths</h3>
                            <span class="section__facts-detail">Caspian sea in Kazakhstan</span>
                        </li>
                        <li class="section__facts-item">
                            <h3 class="section__facts-title">Haunted ways</h3>
                            <span class="section__facts-detail">Kayaking the whole lake</span>
                        </li>
                        <li class="section__facts-item">
                            <h3 class="section__facts-title">Running and more</h3>
                            <span class="section__facts-detail">With 55m it's the deepest</span>
                        </li>
                        <li class="section__facts-item">
                            <h3 class="section__facts-title">Starting to walk</h3>
                            <span class="section__facts-detail">An aerial view of the lake</span>
                        </li>
                    </ul>
                </section><!--/ section -->
                <section class="section">
                    <div class="section__content">
                        <h2 class="section__title">Rivers</h2>
                        <p class="section__description"><span class="section__description-inner">A river is a natural flowing watercourse, usually freshwater, flowing towards an ocean, sea, lake or another river. In some cases a river flows into the ground and becomes dry at the end of its course without reaching another body of water.</span></p>
                    </div>
                    <div class="section__img">
                        <div class="section__img-inner" style="background-image: url(img/4.jpg)"></div>
                    </div>
                    <div class="section__more">
                        <div class="section__more-inner section__more-inner--bg4">
                            <span class="section__more-text">Want to know more?</span>
                            <a href="#" class="section__more-link">
                                <span class="section__more-linktext">Explore all rivers</span>
                                <svg class="icon icon--arrowlong"><use xlink:href="#icon-arrowlong"></use></svg>
                            </a>
                        </div>
                    </div>
                    <div class="section__expander"></div>
                    <ul class="section__facts">
                        <li class="section__facts-item">
                            <h3 class="section__facts-title">River romantics</h3>
                            <span class="section__facts-detail">Caspian sea in Kazakhstan</span>
                        </li>
                        <li class="section__facts-item">
                            <h3 class="section__facts-title">History call</h3>
                            <span class="section__facts-detail">Kayaking the whole lake</span>
                        </li>
                        <li class="section__facts-item">
                            <h3 class="section__facts-title">Walking around</h3>
                            <span class="section__facts-detail">With 55m it's the deepest</span>
                        </li>
                        <li class="section__facts-item">
                            <h3 class="section__facts-title">How many miles?</h3>
                            <span class="section__facts-detail">An aerial view of the lake</span>
                        </li>
                    </ul>
                </section><!--/ section -->
            </div><!--/ sections -->
        </main>

    </div>
</template>

<script>
import imagesLoaded from 'imagesloaded'
import animate from 'animate'
import '../../assets/js/charming.min'

export default {
  name: 'OneProject',
  metaInfo: {
    title: 'Portfolio | Dzianis Makeichyk'
  },
  mounted () {
    // From https://davidwalsh.name/javascript-debounce-function.
    function debounce (func, wait, immediate) {
      let timeout
      return function () {
        let context = this
        let args = arguments
        let later = function () {
          timeout = null
          if (!immediate) func.apply(context, args)
        }
        let callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
      }
    }

    // Window size.
    let win = {width: window.innerWidth, height: window.innerHeight}

    // some animation settings.
    const settings = {
      image: {duration: 900, delay: 0, easing: [0.8, 0, 0.2, 1]},
      more: {duration: 900, delay: 0, easing: [0.8, 0, 0.2, 1]},
      facts: {duration: 300, delay: 0, easing: [0.8, 0, 0.2, 1]},
      title: {duration: 700, delay: 200, easing: [0.8, 0, 0.2, 1]},
      description: {duration: 900, delay: 400, easing: 'easeOutExpo'},
      pagination: {duration: 300, delay: 400, easing: 'easeInOutQuad'},

      menuCtrl: {duration: 300, easing: [0.2, 1, 0.3, 1]},
      menuItems: {duration: 300, easing: [0.2, 1, 0.3, 1]},
      factsCtrl: {duration: 300, easing: 'linear'},
      gallery: {duration: 800, easing: [0.2, 1, 0.3, 1]},
      navigationCtrls: {duration: 800, easing: [0.8, 0, 0.2, 1]},
      previewCloseCtrl: {duration: 300, easing: 'easeOutExpo'},
      factsItems: {duration: 800, easing: [0.8, 0, 0.2, 1]},
      expander: {duration: 800, easing: [0.8, 0, 0.2, 1]}
    }

    class Entry {
      constructor (el) {
        this.DOM = {el: el}
        this.init()
      }
      init () {
        // DOM elements:
        // title
        this.DOM.title = this.DOM.el.querySelector('.section__content > .section__title')
        this.charming(this.DOM.title)
        this.DOM.titleLetters = this.DOM.title.querySelectorAll('span')
        // description
        this.DOM.description = this.DOM.el.querySelector('.section__content > .section__description')
        // image
        this.DOM.image = this.DOM.el.querySelector('.section__img > .section__img-inner')
        // more box
        this.DOM.more = this.DOM.el.querySelector('.section__more > .section__more-inner')
        // expander
        this.DOM.expander = this.DOM.el.querySelector('.section__expander')
        // facts
        this.DOM.facts = {
          wrapper: this.DOM.el.querySelector('.section__facts'),
          items: Array.from(this.DOM.el.querySelectorAll('.section__facts > .section__facts-item'))
        }
      }
      show (direction) {
        this.isHidden = false
        return this.toggle(direction)
      }
      hide (direction) {
        this.isHidden = true
        return this.toggle(direction)
      }
      toggle (direction) {
        this.direction = direction
        return Promise.all([this.toggleTitle(!this.isHidden),
          this.toggleDescription(!this.isHidden),
          this.toggleImage(!this.isHidden),
          this.toggleMore(!this.isHidden),
          this.toggleFacts(!this.isHidden)])
      }
      toggleTitle () {
        this.anime.remove(this.DOM.titleLetters)
        return this.anime({
          targets: this.DOM.titleLetters,
          duration: settings.title.duration,
          delay: (target, index) => index * 30 + settings.title.delay,
          easing: settings.title.easing,
          translateY: this.isHidden ? [0, this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%', 0],
          opacity: {
            value: this.isHidden ? 0 : 1,
            duration: 1,
            delay: (target, index) => this.isHidden ? settings.title.duration + settings.title.delay : settings.title.delay
          }
        }).finished
      }
      toggleDescription () {
        this.anime.remove(this.DOM.description)
        return this.anime({
          targets: this.DOM.description,
          duration: settings.description.duration,
          delay: !this.isHidden ? settings.description.duration * 0.5 + settings.description.delay : settings.description.delay,
          easing: settings.description.easing,
          translateY: this.isHidden ? [0, this.direction === 'next' ? '-10%' : '10%'] : [this.direction === 'next' ? '20%' : '-20%', 0],
          opacity: this.isHidden ? 0 : 1
        }).finished
      }
      toggleImage () {
        this.DOM.image.style.transformOrigin = !this.isHidden ? `50% ${this.direction === 'next' ? 0 : 100}%` : `50% 50%`

        this.anime.remove(this.DOM.image)
        return this.anime({
          targets: this.DOM.image,
          duration: settings.image.duration,
          delay: settings.image.delay,
          easing: settings.image.easing,
          translateY: this.isHidden ? ['0%', this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%', '0%'],
          scale: !this.isHidden ? [1.8, 1] : 1,
          opacity: {
            value: this.isHidden ? 0 : 1,
            duration: 1,
            delay: this.isHidden ? settings.image.duration + settings.image.delay : settings.image.delay
          }
        }).finished
      }
      toggleMore () {
        this.anime.remove(this.DOM.more)
        return this.anime({
          targets: [this.DOM.more, this.DOM.more.children],
          duration: settings.more.duration,
          delay: settings.more.delay,
          easing: settings.more.easing,
          translateY: this.isHidden ? ['0%', this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%', '0%'],
          opacity: {
            value: this.isHidden ? 0 : 1,
            duration: (target, index) => index ? settings.more.duration / 3 : 1,
            delay: (target, index) => index ? this.isHidden ? 100 : settings.more.duration * 0.5 + settings.more.delay : this.isHidden ? settings.more.duration + settings.more.delay : settings.more.delay
          }
        }).finished
      }
      toggleFacts () {
        this.anime.remove(this.DOM.facts.items)
        return this.anime({
          targets: this.DOM.facts.items.slice(0, 2),
          duration: settings.facts.duration,
          delay: (target, index) => {
            return !this.isHidden ? index * 40 + settings.facts.duration * 0.5 + settings.facts.delay : index * 40 + settings.facts.delay
          },
          easing: settings.facts.easing,
          translateY: this.isHidden ? [this.DOM.facts.ty, this.direction === 'next' ? this.DOM.facts.ty - 20 : this.DOM.facts.ty + 20] : [this.direction === 'next' ? this.DOM.facts.ty + 20 : this.DOM.facts.ty - 20, this.DOM.facts.ty],
          opacity: this.isHidden ? 0 : 1
        }).finished
      }
    }

    class Slideshow {
      constructor (el) {
        this.DOM = {}
        this.DOM.el = el
        this.init()
      }
      init () {
        // DOM elements.
        this.DOM.menuCtrl = this.DOM.el.querySelector('.sections__header > button.button-menu')
        this.DOM.menu = {
          wrapper: this.DOM.el.querySelector('.menu'),
          items: Array.from(this.DOM.el.querySelectorAll('.menu > .menu__inner > .menu__item')),
          menuCtrls: {
            toggle: this.DOM.el.querySelector('.menu > .menu__toggle'),
            open: this.DOM.el.querySelector('.menu > .menu__toggle > .menu__toggle-inner--open'),
            close: this.DOM.el.querySelector('.menu > .menu__toggle > .menu__toggle-inner--close')
          }
        }
        this.DOM.factsContainer = this.DOM.el.querySelector('.facts')
        this.DOM.factsCtrls = {
          toggle: this.DOM.factsContainer.querySelector('.facts__toggle'),
          more: this.DOM.factsContainer.querySelector('.facts__toggle > .facts__toggle-inner--more'),
          less: this.DOM.factsContainer.querySelector('.facts__toggle > .facts__toggle-inner--less')
        }
        this.DOM.previewCloseCtrl = this.DOM.factsContainer.querySelector('.button-contentclose')
        this.DOM.pagination = this.DOM.el.querySelector('.sections__index .sections__index-inner')
        this.DOM.navigation = this.DOM.el.querySelector('.sections__nav')
        this.DOM.navigation.prevCtrl = this.DOM.navigation.querySelector('button.sections__nav-item--prev')
        this.DOM.navigation.nextCtrl = this.DOM.navigation.querySelector('button.sections__nav-item--next')
        this.DOM.entries = Array.from(this.DOM.el.querySelectorAll('.section'), entry => new Entry(entry))
        this.entriesTotal = this.DOM.entries.length
        this.currentPos = 0

        this.layout()
        // Init/Bind events.
        this.initEvents()
      }
      layout () {
        this.currentEntry = this.DOM.entries[this.currentPos]
        const factEl = this.currentEntry.DOM.facts.items[0]
        const factHeight = factEl.getBoundingClientRect().height + parseFloat(window.getComputedStyle(factEl).marginBottom)
        const paddingFactsStyle = window.getComputedStyle(this.currentEntry.DOM.facts.wrapper)
        const paddingFacts = parseFloat(paddingFactsStyle.paddingTop) + parseFloat(paddingFactsStyle.paddingBottom)

        this.factsTranslation = win.height - 2 * factHeight - paddingFacts
        for (let i = 0; i <= this.entriesTotal - 1; ++i) {
          const entry = this.DOM.entries[i]
          entry.DOM.expander.style.transform = `scale3d(0.54,1,1) translate3d(0px,${this.factsTranslation}px,0px)`
          for (let j = 0, len = entry.DOM.facts.items.length; j <= len - 1; ++j) {
            entry.DOM.facts.ty = this.factsTranslation
            const item = entry.DOM.facts.items[j]
            item.style.transform = `translate3d(0px,${this.factsTranslation}px,0px)`
            if (j > 1) {
              item.style.opacity = 0
            } else if (i === this.currentPos) {
              item.style.opacity = 1
            }
          }
        }
      }
      initEvents () {
        // Navigation
        this.onPrevClick = () => this.navigate('prev')
        this.onNextClick = () => this.navigate('next')
        this.DOM.navigation.prevCtrl.addEventListener('click', this.onPrevClick)
        this.DOM.navigation.nextCtrl.addEventListener('click', this.onNextClick)

        // Main menu
        this.DOM.menu.menuCtrls.toggle.addEventListener('click', () => this.toggleMenu())

        // Facts Container
        this.DOM.factsCtrls.toggle.addEventListener('click', () => this.toggleFactsContainer())

        // Facts (clickable facts)
        for (let i = 0; i <= this.entriesTotal - 1; ++i) {
          const entry = this.DOM.entries[i]
          entry.DOM.facts.items
            .filter(fact => fact.classList.contains('section__facts-item--clickable'))
            .forEach(clickableFact => clickableFact.addEventListener('click', () => this.preview(clickableFact.dataset.gallery)))
        }

        // Close preview
        this.DOM.previewCloseCtrl.addEventListener('click', () => this.closePreview())

        // Window resize
        this.onResize = () => {
          win = {width: window.innerWidth, height: window.innerHeight}
          this.layout()
          if (this.isFactsOpen) {
            // Toggle the factsCtrls state
            this.DOM.factsCtrls.more.style.opacity = 1
            this.DOM.factsCtrls.less.style.opacity = 0
            this.isFactsOpen = !this.isFactsOpen
            this.toggleNavigationCtrls({opacity: 1, duration: 1})
            this.isFactsAnimating = false
          }
          if (this.gallery) {
            this.DOM.previewCloseCtrl.style.opacity = 0
            this.toggleGallery(this.gallery, {duration: 1, opacity: 0}).then(function () {
              this.gallery = null
            })
          }
          this.DOM.el.classList.remove('sections--factsopen')
        }
        window.addEventListener('resize', debounce(() => this.onResize(), 20))
      }
      navigate (direction) {
        if (this.isEntriesAnimating || this.isFactsAnimating) return
        this.isEntriesAnimating = true
        // Store direction
        this.direction = direction
        // Update currentPos
        const newPos = this.currentPos = this.direction === 'next' ? this.currentPos < this.entriesTotal - 1 ? this.currentPos + 1 : 0 : this.currentPos = this.currentPos > 0 ? this.currentPos - 1 : this.entriesTotal - 1

        const newEntry = this.DOM.entries[newPos]

        this.update(newEntry)
      }
      update (newEntry) {
        const updateFn = () => {
          // hide the current entry and show the next/previous one.
          // when both updatePageNumber, hide and show are finished:
          Promise.all([this.currentEntry.hide(this.direction), newEntry.show(this.direction), this.updatePageNumber()]).then(() => {
            this.isEntriesAnimating = false
            this.currentEntry.DOM.el.classList.remove('section--current')
            newEntry.DOM.el.classList.add('section--current')
            this.currentEntry = newEntry
          })
        }

        if (this.isFactsOpen) {
          this.toggleFactsContainer().then(updateFn)
        } else {
          updateFn()
        }
      }
      updatePageNumber () {
        this.anime.remove(this.DOM.pagination)
        let halfway = false
        return this.anime({
          targets: this.DOM.pagination,
          duration: settings.pagination.duration,
          easing: 'easeInOutQuad',
          translateY: [
            {value: this.direction === 'next' ? '-100%' : '100%', delay: settings.pagination.delay},
            {value: [this.direction === 'next' ? '100%' : '-100%', '0%'], delay: settings.pagination.duration}
          ],
          opacity: [
            {value: 0, delay: settings.pagination.delay},
            {value: [0, 1], delay: settings.pagination.duration}
          ],
          update: (anime) => {
            if (anime.progress >= 50 && !halfway) {
              halfway = true
              this.DOM.pagination.innerHTML = `0${this.currentPos + 1}`
            }
          }
        }).finished
      }
      toggleMenu () {
        if (this.isMenuAnimating) return
        this.isMenuAnimating = true

        const toggleMenuCtrlFn = () => {
          this.anime.remove([this.DOM.menu.menuCtrls.open, this.DOM.menu.menuCtrls.close])
          return this.anime({
            targets: [this.DOM.menu.menuCtrls.open, this.DOM.menu.menuCtrls.close],
            duration: settings.menuCtrl.duration,
            easing: settings.menuCtrl.easing,
            opacity: (target, index) => index ? !this.isMenuOpen ? 1 : 0 : !this.isMenuOpen ? 0 : 1,
            translateX: (target, index) => index ? !this.isMenuOpen ? ['50%', '0%'] : '50%' : !this.isMenuOpen ? ['0%', '-50%'] : '0%'
          }).finished
        }

        const toggleMenuItemsFn = () => {
          this.anime.remove(this.DOM.menu.items)
          return this.anime({
            targets: this.DOM.menu.items,
            duration: settings.menuItems.duration,
            easing: settings.menuItems.easing,
            delay: (target, index) => !this.isMenuOpen ? index * 80 : 0,
            translateX: !this.isMenuOpen ? ['5%', '0%'] : '0%',
            opacity: {
              value: !this.isMenuOpen ? [0, 1] : 0,
              easing: 'linear',
              delay: (target, index, total) => !this.isMenuOpen ? index * 80 : 0
            }
          }).finished
        }

        this.DOM.menu.wrapper.classList.toggle('menu--open')

        Promise.all([toggleMenuCtrlFn(), toggleMenuItemsFn()]).then(() => {
          this.isMenuOpen = !this.isMenuOpen
          this.isMenuAnimating = false
        })
      }
      toggleFactsContainer () {
        if (this.isFactsAnimating) {
          return
        }
        this.isFactsAnimating = true
        return Promise.all([this.toggleFactsCtrl(), this.animateExpander(), this.animateFactsItems()]).then(() => {
          this.isFactsOpen = !this.isFactsOpen
          this.isFactsAnimating = false
        })
      }
      preview (gallery) {
        if (this.isFactsAnimating || !gallery) return
        this.isFactsAnimating = true

        this.gallery = gallery
        this.DOM.el.classList.add('sections--factsopen')
        Promise.all([
          this.toggleNavigationCtrls({
            opacity: 0
          }),
          this.toggleFactsCtrl({
            delay: 0,
            opacity: 0
          }),
          this.animateExpander({
            translateY: 0,
            scaleX: 1.05
          }),
          this.animateFactsItems({
            translateY: 0,
            opacity: 0,
            delay: 0
          }),
          this.togglePreviewCloseCtrl({
            opacity: 1,
            delay: 800
          }),
          this.toggleGallery(gallery, {
            opacity: 1,
            scale: (target, index) => index ? [0.7, 1] : [1, 1], // just the images..
            delay: (target, index) => index ? index * 100 + 700 : 700 // just the images..
          })
        ]).then(function () {
          this.isFactsAnimating = false
        })
      }
      closePreview () {
        if (this.isFactsAnimating) return
        this.isFactsAnimating = true

        Promise.all([
          this.toggleNavigationCtrls({
            opacity: 1
          }),
          this.toggleFactsCtrl({
            delay: 600,
            opacity: (target, index) => index
          }),
          this.animateExpander({
            translateY: 0,
            scaleX: 0.54
          }),
          this.animateFactsItems({
            translateY: 0,
            opacity: 1,
            delay: 200
          }),
          this.togglePreviewCloseCtrl({
            opacity: 0
          }),
          this.toggleGallery(this.gallery, {
            opacity: 0
          })
        ]).then(() => {
          this.isFactsAnimating = false
          this.gallery = null
          this.DOM.el.classList.remove('sections--factsopen')
        })
      }
      animateExpander (animeconfig) {
        return animate(Object.assign({
          targets: this.currentEntry.DOM.expander,
          duration: settings.expander.duration,
          easing: settings.expander.easing,
          delay: !this.isFactsOpen ? 0 : 300,
          translateY: !this.isFactsOpen ? [this.factsTranslation, 0] : this.factsTranslation,
          scaleX: [0.54, 0.54]
        }, animeconfig))
      }
      animateFactsItems (animeconfig) {
        return animate(Object.assign({
          targets: this.currentEntry.DOM.facts.items,
          duration: settings.factsItems.duration,
          easing: settings.factsItems.easing,
          delay: (target, index, total) => !this.isFactsOpen ? (index + 1) * 30 + 150 : (total - index - 1) * 30,
          translateY: !this.isFactsOpen ? [this.factsTranslation, 0] : this.factsTranslation,
          opacity: (target, index) => !this.isFactsOpen ? 1 : index > 1 ? 0 : 1
        }, animeconfig))
      }
      toggleFactsCtrl (animeconfig) {
        return animate(Object.assign({
          targets: [this.DOM.factsCtrls.more, this.DOM.factsCtrls.less],
          duration: settings.factsCtrl.duration,
          easing: settings.factsCtrl.easing,
          opacity: (target, index) => index ? !this.isFactsOpen ? 1 : 0 : !this.isFactsOpen ? 0 : 1
        }, animeconfig))
      }
      togglePreviewCloseCtrl (animeconfig) {
        return animate(Object.assign({
          targets: this.DOM.previewCloseCtrl,
          duration: settings.previewCloseCtrl.duration,
          easing: settings.previewCloseCtrl.easing
        }, animeconfig))
      }
      toggleNavigationCtrls (animeconfig) {
        return animate(Object.assign({
          targets: [this.DOM.navigation.prevCtrl, this.DOM.navigation.nextCtrl],
          duration: settings.navigationCtrls.duration,
          easing: settings.navigationCtrls.easing
        }, animeconfig))
      }
      toggleGallery (gallery, animeconfig) {
        return animate(Object.assign({
          targets: this.DOM.el.querySelectorAll(`#${gallery} > .section__gallery-item`),
          duration: settings.gallery.duration,
          easing: settings.gallery.easing
        }, animeconfig))
      }
      animate (opts) {
        this.anime.remove(opts.targets)
        return this.anime(opts).finished
      }
    }

    // Preload all the images in the page..
    imagesLoaded(document.querySelectorAll('img'), () => {
      document.body.classList.remove('loading')
      // Init
      Slideshow(document.querySelector('.sections'))
    })
  },
  methods: {
    enter: function enter (el, done) {
      // From https://davidwalsh.name/javascript-debounce-function.
      function debounce (func, wait, immediate) {
        let timeout
        return function () {
          let context = this
          let args = arguments
          let later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
          }
          let callNow = immediate && !timeout
          clearTimeout(timeout)
          timeout = setTimeout(later, wait)
          if (callNow) func.apply(context, args)
        }
      }

      // Window size.
      let win = {width: window.innerWidth, height: window.innerHeight}

      // some animation settings.
      const settings = {
        image: {duration: 900, delay: 0, easing: [0.8, 0, 0.2, 1]},
        more: {duration: 900, delay: 0, easing: [0.8, 0, 0.2, 1]},
        facts: {duration: 300, delay: 0, easing: [0.8, 0, 0.2, 1]},
        title: {duration: 700, delay: 200, easing: [0.8, 0, 0.2, 1]},
        description: {duration: 900, delay: 400, easing: 'easeOutExpo'},
        pagination: {duration: 300, delay: 400, easing: 'easeInOutQuad'},

        menuCtrl: {duration: 300, easing: [0.2, 1, 0.3, 1]},
        menuItems: {duration: 300, easing: [0.2, 1, 0.3, 1]},
        factsCtrl: {duration: 300, easing: 'linear'},
        gallery: {duration: 800, easing: [0.2, 1, 0.3, 1]},
        navigationCtrls: {duration: 800, easing: [0.8, 0, 0.2, 1]},
        previewCloseCtrl: {duration: 300, easing: 'easeOutExpo'},
        factsItems: {duration: 800, easing: [0.8, 0, 0.2, 1]},
        expander: {duration: 800, easing: [0.8, 0, 0.2, 1]}
      }

      class Entry {
        constructor (el) {
          this.DOM = {el: el}
          this.init()
        }
        init () {
          // DOM elements:
          // title
          this.DOM.title = this.DOM.el.querySelector('.section__content > .section__title')
          this.charming(this.DOM.title)
          this.DOM.titleLetters = this.DOM.title.querySelectorAll('span')
          // description
          this.DOM.description = this.DOM.el.querySelector('.section__content > .section__description')
          // image
          this.DOM.image = this.DOM.el.querySelector('.section__img > .section__img-inner')
          // more box
          this.DOM.more = this.DOM.el.querySelector('.section__more > .section__more-inner')
          // expander
          this.DOM.expander = this.DOM.el.querySelector('.section__expander')
          // facts
          this.DOM.facts = {
            wrapper: this.DOM.el.querySelector('.section__facts'),
            items: Array.from(this.DOM.el.querySelectorAll('.section__facts > .section__facts-item'))
          }
        }
        show (direction) {
          this.isHidden = false
          return this.toggle(direction)
        }
        hide (direction) {
          this.isHidden = true
          return this.toggle(direction)
        }
        toggle (direction) {
          this.direction = direction
          return Promise.all([this.toggleTitle(!this.isHidden),
            this.toggleDescription(!this.isHidden),
            this.toggleImage(!this.isHidden),
            this.toggleMore(!this.isHidden),
            this.toggleFacts(!this.isHidden)])
        }
        toggleTitle () {
          this.anime.remove(this.DOM.titleLetters)
          return this.anime({
            targets: this.DOM.titleLetters,
            duration: settings.title.duration,
            delay: (target, index) => index * 30 + settings.title.delay,
            easing: settings.title.easing,
            translateY: this.isHidden ? [0, this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%', 0],
            opacity: {
              value: this.isHidden ? 0 : 1,
              duration: 1,
              delay: (target, index) => this.isHidden ? settings.title.duration + settings.title.delay : settings.title.delay
            }
          }).finished
        }
        toggleDescription () {
          this.anime.remove(this.DOM.description)
          return this.anime({
            targets: this.DOM.description,
            duration: settings.description.duration,
            delay: !this.isHidden ? settings.description.duration * 0.5 + settings.description.delay : settings.description.delay,
            easing: settings.description.easing,
            translateY: this.isHidden ? [0, this.direction === 'next' ? '-10%' : '10%'] : [this.direction === 'next' ? '20%' : '-20%', 0],
            opacity: this.isHidden ? 0 : 1
          }).finished
        }
        toggleImage () {
          this.DOM.image.style.transformOrigin = !this.isHidden ? `50% ${this.direction === 'next' ? 0 : 100}%` : `50% 50%`

          this.anime.remove(this.DOM.image)
          return this.anime({
            targets: this.DOM.image,
            duration: settings.image.duration,
            delay: settings.image.delay,
            easing: settings.image.easing,
            translateY: this.isHidden ? ['0%', this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%', '0%'],
            scale: !this.isHidden ? [1.8, 1] : 1,
            opacity: {
              value: this.isHidden ? 0 : 1,
              duration: 1,
              delay: this.isHidden ? settings.image.duration + settings.image.delay : settings.image.delay
            }
          }).finished
        }
        toggleMore () {
          this.anime.remove(this.DOM.more)
          return this.anime({
            targets: [this.DOM.more, this.DOM.more.children],
            duration: settings.more.duration,
            delay: settings.more.delay,
            easing: settings.more.easing,
            translateY: this.isHidden ? ['0%', this.direction === 'next' ? '-100%' : '100%'] : [this.direction === 'next' ? '100%' : '-100%', '0%'],
            opacity: {
              value: this.isHidden ? 0 : 1,
              duration: (target, index) => index ? settings.more.duration / 3 : 1,
              delay: (target, index) => index ? this.isHidden ? 100 : settings.more.duration * 0.5 + settings.more.delay : this.isHidden ? settings.more.duration + settings.more.delay : settings.more.delay
            }
          }).finished
        }
        toggleFacts () {
          this.anime.remove(this.DOM.facts.items)
          return this.anime({
            targets: this.DOM.facts.items.slice(0, 2),
            duration: settings.facts.duration,
            delay: (target, index) => {
              return !this.isHidden ? index * 40 + settings.facts.duration * 0.5 + settings.facts.delay : index * 40 + settings.facts.delay
            },
            easing: settings.facts.easing,
            translateY: this.isHidden ? [this.DOM.facts.ty, this.direction === 'next' ? this.DOM.facts.ty - 20 : this.DOM.facts.ty + 20] : [this.direction === 'next' ? this.DOM.facts.ty + 20 : this.DOM.facts.ty - 20, this.DOM.facts.ty],
            opacity: this.isHidden ? 0 : 1
          }).finished
        }
      }

      class Slideshow {
        constructor (el) {
          this.DOM = {}
          this.DOM.el = el
          this.init()
        }
        init () {
          // DOM elements.
          this.DOM.menuCtrl = this.DOM.el.querySelector('.sections__header > button.button-menu')
          this.DOM.menu = {
            wrapper: this.DOM.el.querySelector('.menu'),
            items: Array.from(this.DOM.el.querySelectorAll('.menu > .menu__inner > .menu__item')),
            menuCtrls: {
              toggle: this.DOM.el.querySelector('.menu > .menu__toggle'),
              open: this.DOM.el.querySelector('.menu > .menu__toggle > .menu__toggle-inner--open'),
              close: this.DOM.el.querySelector('.menu > .menu__toggle > .menu__toggle-inner--close')
            }
          }
          this.DOM.factsContainer = this.DOM.el.querySelector('.facts')
          this.DOM.factsCtrls = {
            toggle: this.DOM.factsContainer.querySelector('.facts__toggle'),
            more: this.DOM.factsContainer.querySelector('.facts__toggle > .facts__toggle-inner--more'),
            less: this.DOM.factsContainer.querySelector('.facts__toggle > .facts__toggle-inner--less')
          }
          this.DOM.previewCloseCtrl = this.DOM.factsContainer.querySelector('.button-contentclose')
          this.DOM.pagination = this.DOM.el.querySelector('.sections__index .sections__index-inner')
          this.DOM.navigation = this.DOM.el.querySelector('.sections__nav')
          this.DOM.navigation.prevCtrl = this.DOM.navigation.querySelector('button.sections__nav-item--prev')
          this.DOM.navigation.nextCtrl = this.DOM.navigation.querySelector('button.sections__nav-item--next')
          this.DOM.entries = Array.from(this.DOM.el.querySelectorAll('.section'), entry => new Entry(entry))
          this.entriesTotal = this.DOM.entries.length
          this.currentPos = 0

          this.layout()
          // Init/Bind events.
          this.initEvents()
        }
        layout () {
          this.currentEntry = this.DOM.entries[this.currentPos]
          const factEl = this.currentEntry.DOM.facts.items[0]
          const factHeight = factEl.getBoundingClientRect().height + parseFloat(window.getComputedStyle(factEl).marginBottom)
          const paddingFactsStyle = window.getComputedStyle(this.currentEntry.DOM.facts.wrapper)
          const paddingFacts = parseFloat(paddingFactsStyle.paddingTop) + parseFloat(paddingFactsStyle.paddingBottom)

          this.factsTranslation = win.height - 2 * factHeight - paddingFacts
          for (let i = 0; i <= this.entriesTotal - 1; ++i) {
            const entry = this.DOM.entries[i]
            entry.DOM.expander.style.transform = `scale3d(0.54,1,1) translate3d(0px,${this.factsTranslation}px,0px)`
            for (let j = 0, len = entry.DOM.facts.items.length; j <= len - 1; ++j) {
              entry.DOM.facts.ty = this.factsTranslation
              const item = entry.DOM.facts.items[j]
              item.style.transform = `translate3d(0px,${this.factsTranslation}px,0px)`
              if (j > 1) {
                item.style.opacity = 0
              } else if (i === this.currentPos) {
                item.style.opacity = 1
              }
            }
          }
        }
        initEvents () {
          // Navigation
          this.onPrevClick = () => this.navigate('prev')
          this.onNextClick = () => this.navigate('next')
          this.DOM.navigation.prevCtrl.addEventListener('click', this.onPrevClick)
          this.DOM.navigation.nextCtrl.addEventListener('click', this.onNextClick)

          // Main menu
          this.DOM.menu.menuCtrls.toggle.addEventListener('click', () => this.toggleMenu())

          // Facts Container
          this.DOM.factsCtrls.toggle.addEventListener('click', () => this.toggleFactsContainer())

          // Facts (clickable facts)
          for (let i = 0; i <= this.entriesTotal - 1; ++i) {
            const entry = this.DOM.entries[i]
            entry.DOM.facts.items
              .filter(fact => fact.classList.contains('section__facts-item--clickable'))
              .forEach(clickableFact => clickableFact.addEventListener('click', () => this.preview(clickableFact.dataset.gallery)))
          }

          // Close preview
          this.DOM.previewCloseCtrl.addEventListener('click', () => this.closePreview())

          // Window resize
          this.onResize = () => {
            win = {width: window.innerWidth, height: window.innerHeight}
            this.layout()
            if (this.isFactsOpen) {
              // Toggle the factsCtrls state
              this.DOM.factsCtrls.more.style.opacity = 1
              this.DOM.factsCtrls.less.style.opacity = 0
              this.isFactsOpen = !this.isFactsOpen
              this.toggleNavigationCtrls({opacity: 1, duration: 1})
              this.isFactsAnimating = false
            }
            if (this.gallery) {
              this.DOM.previewCloseCtrl.style.opacity = 0
              this.toggleGallery(this.gallery, {duration: 1, opacity: 0}).then(function () {
                this.gallery = null
              })
            }
            this.DOM.el.classList.remove('sections--factsopen')
          }
          window.addEventListener('resize', debounce(() => this.onResize(), 20))
        }
        navigate (direction) {
          if (this.isEntriesAnimating || this.isFactsAnimating) return
          this.isEntriesAnimating = true
          // Store direction
          this.direction = direction
          // Update currentPos
          const newPos = this.currentPos = this.direction === 'next' ? this.currentPos < this.entriesTotal - 1 ? this.currentPos + 1 : 0 : this.currentPos = this.currentPos > 0 ? this.currentPos - 1 : this.entriesTotal - 1

          const newEntry = this.DOM.entries[newPos]

          this.update(newEntry)
        }
        update (newEntry) {
          const updateFn = () => {
            // hide the current entry and show the next/previous one.
            // when both updatePageNumber, hide and show are finished:
            Promise.all([this.currentEntry.hide(this.direction), newEntry.show(this.direction), this.updatePageNumber()]).then(() => {
              this.isEntriesAnimating = false
              this.currentEntry.DOM.el.classList.remove('section--current')
              newEntry.DOM.el.classList.add('section--current')
              this.currentEntry = newEntry
            })
          }

          if (this.isFactsOpen) {
            this.toggleFactsContainer().then(updateFn)
          } else {
            updateFn()
          }
        }
        updatePageNumber () {
          this.anime.remove(this.DOM.pagination)
          let halfway = false
          return this.anime({
            targets: this.DOM.pagination,
            duration: settings.pagination.duration,
            easing: 'easeInOutQuad',
            translateY: [
              {value: this.direction === 'next' ? '-100%' : '100%', delay: settings.pagination.delay},
              {value: [this.direction === 'next' ? '100%' : '-100%', '0%'], delay: settings.pagination.duration}
            ],
            opacity: [
              {value: 0, delay: settings.pagination.delay},
              {value: [0, 1], delay: settings.pagination.duration}
            ],
            update: (anime) => {
              if (anime.progress >= 50 && !halfway) {
                halfway = true
                this.DOM.pagination.innerHTML = `0${this.currentPos + 1}`
              }
            }
          }).finished
        }
        toggleMenu () {
          if (this.isMenuAnimating) return
          this.isMenuAnimating = true

          const toggleMenuCtrlFn = () => {
            this.anime.remove([this.DOM.menu.menuCtrls.open, this.DOM.menu.menuCtrls.close])
            return this.anime({
              targets: [this.DOM.menu.menuCtrls.open, this.DOM.menu.menuCtrls.close],
              duration: settings.menuCtrl.duration,
              easing: settings.menuCtrl.easing,
              opacity: (target, index) => index ? !this.isMenuOpen ? 1 : 0 : !this.isMenuOpen ? 0 : 1,
              translateX: (target, index) => index ? !this.isMenuOpen ? ['50%', '0%'] : '50%' : !this.isMenuOpen ? ['0%', '-50%'] : '0%'
            }).finished
          }

          const toggleMenuItemsFn = () => {
            this.anime.remove(this.DOM.menu.items)
            return this.anime({
              targets: this.DOM.menu.items,
              duration: settings.menuItems.duration,
              easing: settings.menuItems.easing,
              delay: (target, index) => !this.isMenuOpen ? index * 80 : 0,
              translateX: !this.isMenuOpen ? ['5%', '0%'] : '0%',
              opacity: {
                value: !this.isMenuOpen ? [0, 1] : 0,
                easing: 'linear',
                delay: (target, index, total) => !this.isMenuOpen ? index * 80 : 0
              }
            }).finished
          }

          this.DOM.menu.wrapper.classList.toggle('menu--open')

          Promise.all([toggleMenuCtrlFn(), toggleMenuItemsFn()]).then(() => {
            this.isMenuOpen = !this.isMenuOpen
            this.isMenuAnimating = false
          })
        }
        toggleFactsContainer () {
          if (this.isFactsAnimating) {
            return
          }
          this.isFactsAnimating = true
          return Promise.all([this.toggleFactsCtrl(), this.animateExpander(), this.animateFactsItems()]).then(() => {
            this.isFactsOpen = !this.isFactsOpen
            this.isFactsAnimating = false
          })
        }
        preview (gallery) {
          if (this.isFactsAnimating || !gallery) return
          this.isFactsAnimating = true

          this.gallery = gallery
          this.DOM.el.classList.add('sections--factsopen')
          Promise.all([
            this.toggleNavigationCtrls({
              opacity: 0
            }),
            this.toggleFactsCtrl({
              delay: 0,
              opacity: 0
            }),
            this.animateExpander({
              translateY: 0,
              scaleX: 1.05
            }),
            this.animateFactsItems({
              translateY: 0,
              opacity: 0,
              delay: 0
            }),
            this.togglePreviewCloseCtrl({
              opacity: 1,
              delay: 800
            }),
            this.toggleGallery(gallery, {
              opacity: 1,
              scale: (target, index) => index ? [0.7, 1] : [1, 1], // just the images..
              delay: (target, index) => index ? index * 100 + 700 : 700 // just the images..
            })
          ]).then(function () {
            this.isFactsAnimating = false
          })
        }
        closePreview () {
          if (this.isFactsAnimating) return
          this.isFactsAnimating = true

          Promise.all([
            this.toggleNavigationCtrls({
              opacity: 1
            }),
            this.toggleFactsCtrl({
              delay: 600,
              opacity: (target, index) => index
            }),
            this.animateExpander({
              translateY: 0,
              scaleX: 0.54
            }),
            this.animateFactsItems({
              translateY: 0,
              opacity: 1,
              delay: 200
            }),
            this.togglePreviewCloseCtrl({
              opacity: 0
            }),
            this.toggleGallery(this.gallery, {
              opacity: 0
            })
          ]).then(() => {
            this.isFactsAnimating = false
            this.gallery = null
            this.DOM.el.classList.remove('sections--factsopen')
          })
        }
        animateExpander (animeconfig) {
          return animate(Object.assign({
            targets: this.currentEntry.DOM.expander,
            duration: settings.expander.duration,
            easing: settings.expander.easing,
            delay: !this.isFactsOpen ? 0 : 300,
            translateY: !this.isFactsOpen ? [this.factsTranslation, 0] : this.factsTranslation,
            scaleX: [0.54, 0.54]
          }, animeconfig))
        }
        animateFactsItems (animeconfig) {
          return animate(Object.assign({
            targets: this.currentEntry.DOM.facts.items,
            duration: settings.factsItems.duration,
            easing: settings.factsItems.easing,
            delay: (target, index, total) => !this.isFactsOpen ? (index + 1) * 30 + 150 : (total - index - 1) * 30,
            translateY: !this.isFactsOpen ? [this.factsTranslation, 0] : this.factsTranslation,
            opacity: (target, index) => !this.isFactsOpen ? 1 : index > 1 ? 0 : 1
          }, animeconfig))
        }
        toggleFactsCtrl (animeconfig) {
          return animate(Object.assign({
            targets: [this.DOM.factsCtrls.more, this.DOM.factsCtrls.less],
            duration: settings.factsCtrl.duration,
            easing: settings.factsCtrl.easing,
            opacity: (target, index) => index ? !this.isFactsOpen ? 1 : 0 : !this.isFactsOpen ? 0 : 1
          }, animeconfig))
        }
        togglePreviewCloseCtrl (animeconfig) {
          return animate(Object.assign({
            targets: this.DOM.previewCloseCtrl,
            duration: settings.previewCloseCtrl.duration,
            easing: settings.previewCloseCtrl.easing
          }, animeconfig))
        }
        toggleNavigationCtrls (animeconfig) {
          return animate(Object.assign({
            targets: [this.DOM.navigation.prevCtrl, this.DOM.navigation.nextCtrl],
            duration: settings.navigationCtrls.duration,
            easing: settings.navigationCtrls.easing
          }, animeconfig))
        }
        toggleGallery (gallery, animeconfig) {
          return animate(Object.assign({
            targets: this.DOM.el.querySelectorAll(`#${gallery} > .section__gallery-item`),
            duration: settings.gallery.duration,
            easing: settings.gallery.easing
          }, animeconfig))
        }
        animate (opts) {
          this.anime.remove(opts.targets)
          return this.anime(opts).finished
        }
      }

      // Preload all the images in the page..
      imagesLoaded(document.querySelectorAll('img'), () => {
        document.body.classList.remove('loading')
        // Init
        Slideshow(document.querySelector('.sections'))
      })
    }
  }
}
</script>

<!--scoped-->
<style lang="scss" scoped >
    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        font-family: "Montserrat", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* Colors */
        --color-text: #000;
        --color-bg-main: #fff;
        --color-menu-item: #fff;
        --color-menu-item-hover: #e0f3ca;
        --color-bg-menu: #cbf3ee;
        --color-bg-facts: #000;
        --color-text-facts: #fff;
        --color-bg-img: #000;
        --color-bg-more-1: #fee9b1;
        --color-bg-more-2: #e0f3ca;
        --color-bg-more-3: #f3cae8;
        --color-bg-more-4: #cacaf3;
        --color-nav: #ddd;
        --color-nav-hover: #000;
        --color-link: #000;
        --color-link-hover: #333;
    }

    /* Page Loader */
    .js .loading::before {
        content: '';
        position: fixed;
        z-index: 100000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--color-bg-main);
    }

    .js .loading::after {
        content: '';
        position: fixed;
        z-index: 100000;
        top: 50%;
        left: 50%;
        width: 60px;
        height: 60px;
        margin: -30px 0 0 -30px;
        pointer-events: none;
        opacity: 0;
        background: var(--color-text);
        animation: loaderAnim 0.8s ease-in infinite alternate forwards;
    }

    @keyframes loaderAnim {
        to {
            opacity: 1;
            transform: scale3d(0.5,0.5,1) rotate(90deg);
        }
    }

    a {
        text-decoration: none;
        color: var(--color-link);
        outline: none;
    }

    a:hover,
    a:focus {
        color: var(--color-link-hover);
        outline: none;
    }

    .hidden {
        position: absolute;
        overflow: hidden;
        width: 0;
        height: 0;
        pointer-events: none;
    }

    button {
        border: 0;
        background: none;
        margin: 0;
        padding: 0;
        font-family: inherit;
        cursor: pointer;
        -webkit-appearance: none;
    }

    button:focus {
        outline: none;
    }

    /* Codrops links */
    .codrops-links {
        position: relative;
        z-index: 1000;
        display: flex;
        margin: 2rem 1.5rem;
        white-space: nowrap;
    }

    .codrops-icon {
        display: inline-block;
        margin: 0.25rem;
    }

    .codrops-icon .icon {
        width: 1.5rem;
        height: 1.5rem;
    }

    /* Icons */
    .icon {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        fill: currentColor;
    }

    .sections__header {
        padding: 2rem 3rem 0 2rem;
        display: flex;
    }

    .title {
        text-transform: lowercase;
        font-size: 1.35rem;
        margin: 0;
    }

    .menu {
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        z-index: 3000;
        display: grid;
        grid-template-columns: 100%;
        pointer-events: none;
        align-items: start;
    }

    .menu::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        right: 0;
        transition: opacity 0.3s;
        pointer-events: none;
        opacity: 0;
    }

    .menu--open::before {
        opacity: 1;
        pointer-events: auto;
    }

    .menu__inner {
        padding: 4rem 2rem 0 0;
        grid-area: 1 / 1 / 2 / 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style: none;
        opacity: 1;
        position: relative;
        text-align: right;
    }

    .menu__toggle {
        position: absolute;
        top: 0;
        right: 0;
        margin: 2.3rem 2rem;
        display: grid;
        grid-template: 100% / 100%;
        pointer-events: auto;
        cursor: pointer;
    }

    .menu__toggle-inner {
        display: block;
        grid-area: 1 / 1 / 1 / 1;
    }

    .menu__toggle-inner--close {
        opacity: 0;
        color: var(--color-menu-item);;
    }

    .menu__item {
        font-size: 2.25rem;
        margin: 0 0 1.5rem;
        font-weight: bold;
        opacity: 0;
    }

    .menu--open .menu__item {
        pointer-events: auto;
    }

    .menu__item-link {
        color: var(--color-menu-item);
    }

    .menu__item-link:hover {
        color: var(--color-menu-item-hover);
    }

    .sections__index,
    .sections__nav {
        display: none;
    }

    .facts {
        display: none;
    }

    .section__content {
        padding: 2rem;
    }

    .section__title {
        font-size: 10vw;
        text-transform: lowercase;
        margin: 0;
        letter-spacing: -0.35vw;
        position: relative;
        overflow: hidden;
    }

    .section__title span {
        display: inline-block;
    }

    .section__description {
        line-height: 1.75;
        overflow: hidden;
        position: relative;
        padding: 0 2rem 0 0;
        font-weight: 300;
    }

    .section__description-inner {
        display: block;
    }

    .section__img {
        height: 45vh;
        pointer-events: none;
    }

    .section__img-inner {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: 50% 50%;
    }

    .section__facts {
        padding: 2rem;
        margin: 0;
        list-style: none;
        background: var(--color-bg-facts);
        color: var(--color-text-facts);
    }

    .section__facts-item {
        margin: 0 0 2.5rem 0;
    }

    .section__facts-img {
        max-width: 200px;
        border-radius: 5px;
        display: block;
        cursor: pointer;
        margin: 4rem 0 2rem 0;
        position: relative;
    }

    .section__facts-img::before,
    .section__facts-img::after {
        content: '';
        width: 100%;
        height: 100%;
        background: #2f2f2f;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .section__facts-img::before {
        transform: rotate(3deg);
    }

    .section__facts-img::after {
        transform: rotate(-5deg);
    }

    .section__facts-img img {
        max-width: none;
        width: 100%;
    }
    .icon--grid {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1.5rem;
        height: 1.5rem;
        margin: -0.75rem 0 0 -0.75rem;
    }

    .section__facts-title {
        font-size: 1em;
        margin: 0 0 0.5rem;
    }

    .section__facts-detail {
        font-weight: 300;
    }

    .section__facts-item--clickable {
        display: none;
    }

    .section__gallery {
        grid-area: 1 / 4 / 4 / 2;
        padding: 2rem;
        display: grid;
        grid-gap: 0.75rem;
        grid-template-columns: 50% 50%;
        grid-template-rows: 2rem 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
        z-index: 300;
        pointer-events: none;
        height: 100vh;
        background: var(--color-bg-facts);
    }

    .section__gallery-item {
        width: 100%;
        height: 100%;
        display: grid;
    }

    .section__gallery-item--title {
        grid-area: 1 / 1 / 2 / 3;
        color: #fff;
        font-size: 1em;
        margin: 0;
    }

    .section__gallery-item img {
        max-width: 100%;
        max-height: 100%;
        margin: auto 0;
        display: block;
    }

    .section__more {
        display: flex;
        align-items: stretch;
        overflow: hidden;
    }

    .section__more-inner {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }

    .section__more-inner--bg1 {
        background-color: var(--color-bg-more-1);
    }

    .section__more-inner--bg2 {
        background-color: var(--color-bg-more-2);
    }

    .section__more-inner--bg3 {
        background-color: var(--color-bg-more-3);
    }

    .section__more-inner--bg4 {
        background-color: var(--color-bg-more-4);
    }

    .section__more-text {
        font-weight: bold;
        display: block;
        margin: 0 0 1rem 0;
    }

    .section__more-link {
        display: flex;
        cursor: pointer;
        font-weight: 300;
    }

    .section__more-linktext {
        margin: 0 0.5rem 0 0;
        line-height: 1;
    }

    .icon--arrowlong {
        width: 2rem;
        height: 1.25rem;
    }

    @media screen and (min-width: 55em) and (min-height: 40em) {
        .sections {
            height: 100vh;
            overflow: hidden;
            display: grid;
            grid-template-columns: 45% 55%;
            grid-template-rows: 6rem calc(30% - 2rem) calc(44% - 2rem) calc(26% - 2rem);
        }
        .codrops-links {
            position: absolute;
            top: 0;
            right: 0;
        }
        .sections--factsopen .codrops-links {
            opacity: 0;
            pointer-events: none;
        }
        .codrops-icon {
            color: #fff;
        }
        .menu {
            grid-template-columns: 47% 53%;
        }
        .menu__toggle {
            right: 53%;
            margin: 2.3rem 4rem 0 0;
        }
        .menu__inner {
            padding: 4rem 4rem 0 0;
        }
        .facts {
            position: relative;
            grid-area: expander;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            pointer-events: none;
            z-index: 200;
        }
        .facts__toggle {
            font-weight: bold;
            cursor: pointer;
            width: 48%;
            padding: 0 0 0 5vw;
            margin: 0 0 0 2vw;
            height: 5rem;
            position: relative;
            display: grid;
            grid-template: 100% / 100%;
            color: var(--color-text-facts);
            pointer-events: auto;
        }
        .facts__toggle:hover {
            opacity: 0.6;
        }
        .facts__toggle-inner {
            text-transform: uppercase;
            font-size: 0.6rem;
            letter-spacing: 0.25rem;
            grid-area: 1 / 1 / 1 / 1;
            display: flex;
        }
        .facts__toggle-inner--less {
            opacity: 0;
        }
        .facts__toggle-text {
            line-height: 1.75;
            margin: 0 0 0 0.25rem;
        }
        .button-contentclose {
            position: absolute;
            top: 0;
            right: 0;
            margin: 2rem;
            opacity: 0;
            pointer-events: none;
            color: var(--color-text-facts);
        }
        .sections__header {
            grid-area: header;
        }
        .sections__index {
            font-weight: bold;
            font-size: 0.75rem;
            display: block;
            align-self: end;
            padding: 0 4rem 3rem 20%;
            grid-area: sections-index;
            display: flex;
            z-index: 1;
        }
        .sections__index-current {
            position: relative;
            overflow: hidden;
        }
        .sections__index-total {
            position: relative;
            margin: 0 0 0 8rem;
        }
        .sections__index-total::after {
            content: '';
            position: absolute;
            width: 6rem;
            height: 3px;
            top: calc(50% - 1.5px);
            right: calc(100% + 1rem);
            background: #000;
        }
        .sections__index-inner {
            display: block;
            width: 1.15rem;
        }
        .sections__nav {
            display: block;
            grid-area: sections-nav;
            z-index: 5;
            padding: 2rem 4rem 0;
            background: linear-gradient(0deg, #ffffff 90%, rgba(255,255,255,0));
        }
        .sections__nav-item {
            border: 2px solid var(--color-nav);
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            background: var(--color-bg-main);
        }
        .sections__nav-item:hover {
            border-color: var(--color-nav-hover);
        }
        .sections__nav-item .icon {
            width: 100%;
            height: 100%;
        }
        .section {
            pointer-events: none;
            grid-area: 1 / 1 / 5 / 4;
            display: grid;
            grid-template-columns: 47% 25% 28%;
            grid-template-rows: 39% 39% 22%;
        }
        .section--current {
            pointer-events: auto;
        }
        .section__content {
            padding: 0 4rem;
            grid-area: slide-content;
        }
        .section__expander {
            grid-area: 1 / 2 / 4 / 4;
            background: var(--color-bg-facts);
            transform-origin: 0 0;
            left: -2vw;
            position: relative;
            z-index: 100;
        }
        .section__img {
            height: auto;
            grid-area: slide-image;
            overflow: hidden;
            z-index: 99;
        }
        .section:fist-of-type .section__img {
            background: var(--color-bg-img);
        }
        .section__facts-item--clickable {
            display: block;
        }
        .section__gallery {
            grid-template-columns: repeat(2, calc(200px + 2rem));
            grid-gap: 1rem;
            padding: 10vh 5vw;
            background: transparent;
            position: relative;
        }
        .section__gallery-item {
            padding: 0 0 0 1rem;
            opacity: 0;
        }
        .section__more {
            grid-area: more;
        }
        .section__facts {
            padding: 10vh 5vw;
            pointer-events: none;
            background: transparent;
            position: relative;
            z-index: 200;
            grid-area: 1 / 2 / 4 / 3;
        }
        .section__facts-detail {
            display: block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .section__more-inner {
            padding: 0;
        }
        .sections--factsopen .sections__nav,
        .sections--factsopen .section__facts-item--clickable .section__facts-img,
        .sections--factsopen .facts__toggle {
            pointer-events: none;
        }
        .sections--factsopen .button-contentclose,
        .section--current .section__facts-item--clickable,
        .sections--factsopen .section__gallery-item {
            pointer-events: auto;
        }
        .js .section:not(.section--current) {
            pointer-events: none;
        }
        .js .section:not(.section--current) .section__title span,
        .js .section:not(.section--current) .section__description,
        .js .section:not(.section--current) .section__img-inner,
        .js .section:not(.section--current) .section__more-inner,
        .js .section:not(.section--current) .section__more-text,
        .js .section:not(.section--current) .section__more-link,
        .js .section:not(.section--current) .section__facts-item {
            opacity: 0;
        }
    }

    @media screen and (max-width: 54.9em), screen and (max-height: 39.9em) {
        .js .section__title span,
        .js .section__description,
        .js .section__img-inner,
        .js .section__more-inner,
        .js .section__more-text,
        .js .section__more-link,
        .js .section__facts-item,
        .js .section__gallery-item {
            opacity: 1 !important;
            transform: none !important;
        }
        .codrops-icon .icon {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            border: 2px solid;
            padding: 0.5rem;
        }
    }

</style>
