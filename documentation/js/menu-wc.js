'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-jwt documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-a9d19d0dc7017cc0ecdc2add8998cb0e"' : 'data-target="#xs-injectables-links-module-AppModule-a9d19d0dc7017cc0ecdc2add8998cb0e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a9d19d0dc7017cc0ecdc2add8998cb0e"' :
                                        'id="xs-injectables-links-module-AppModule-a9d19d0dc7017cc0ecdc2add8998cb0e"' }>
                                        <li class="link">
                                            <a href="injectables/ClusterService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ClusterService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-790e7ba3588ed597a3b99bfc8901e7c6"' : 'data-target="#xs-controllers-links-module-AuthModule-790e7ba3588ed597a3b99bfc8901e7c6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-790e7ba3588ed597a3b99bfc8901e7c6"' :
                                            'id="xs-controllers-links-module-AuthModule-790e7ba3588ed597a3b99bfc8901e7c6"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-790e7ba3588ed597a3b99bfc8901e7c6"' : 'data-target="#xs-injectables-links-module-AuthModule-790e7ba3588ed597a3b99bfc8901e7c6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-790e7ba3588ed597a3b99bfc8901e7c6"' :
                                        'id="xs-injectables-links-module-AuthModule-790e7ba3588ed597a3b99bfc8901e7c6"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BillingModule.html" data-type="entity-link">BillingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BillingModule-28450b1367915a1c6d85fb4014ebc5a1"' : 'data-target="#xs-controllers-links-module-BillingModule-28450b1367915a1c6d85fb4014ebc5a1"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BillingModule-28450b1367915a1c6d85fb4014ebc5a1"' :
                                            'id="xs-controllers-links-module-BillingModule-28450b1367915a1c6d85fb4014ebc5a1"' }>
                                            <li class="link">
                                                <a href="controllers/BillingController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BillingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BillingModule-28450b1367915a1c6d85fb4014ebc5a1"' : 'data-target="#xs-injectables-links-module-BillingModule-28450b1367915a1c6d85fb4014ebc5a1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BillingModule-28450b1367915a1c6d85fb4014ebc5a1"' :
                                        'id="xs-injectables-links-module-BillingModule-28450b1367915a1c6d85fb4014ebc5a1"' }>
                                        <li class="link">
                                            <a href="injectables/BillingService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BillingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientModule.html" data-type="entity-link">ClientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ClientModule-2bebac564cc3d449238724e8719ee701"' : 'data-target="#xs-controllers-links-module-ClientModule-2bebac564cc3d449238724e8719ee701"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ClientModule-2bebac564cc3d449238724e8719ee701"' :
                                            'id="xs-controllers-links-module-ClientModule-2bebac564cc3d449238724e8719ee701"' }>
                                            <li class="link">
                                                <a href="controllers/ClientController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ClientModule-2bebac564cc3d449238724e8719ee701"' : 'data-target="#xs-injectables-links-module-ClientModule-2bebac564cc3d449238724e8719ee701"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ClientModule-2bebac564cc3d449238724e8719ee701"' :
                                        'id="xs-injectables-links-module-ClientModule-2bebac564cc3d449238724e8719ee701"' }>
                                        <li class="link">
                                            <a href="injectables/ClientService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ClientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DeviceModule.html" data-type="entity-link">DeviceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DeviceModule-7a995ec3fb1a0710c0ff57624a10558c"' : 'data-target="#xs-controllers-links-module-DeviceModule-7a995ec3fb1a0710c0ff57624a10558c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DeviceModule-7a995ec3fb1a0710c0ff57624a10558c"' :
                                            'id="xs-controllers-links-module-DeviceModule-7a995ec3fb1a0710c0ff57624a10558c"' }>
                                            <li class="link">
                                                <a href="controllers/DeviceController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeviceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DeviceModule-7a995ec3fb1a0710c0ff57624a10558c"' : 'data-target="#xs-injectables-links-module-DeviceModule-7a995ec3fb1a0710c0ff57624a10558c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DeviceModule-7a995ec3fb1a0710c0ff57624a10558c"' :
                                        'id="xs-injectables-links-module-DeviceModule-7a995ec3fb1a0710c0ff57624a10558c"' }>
                                        <li class="link">
                                            <a href="injectables/DeviceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DeviceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/IoCtlModule.html" data-type="entity-link">IoCtlModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-IoCtlModule-cec2555b53b57ec507dc917b9aa10513"' : 'data-target="#xs-controllers-links-module-IoCtlModule-cec2555b53b57ec507dc917b9aa10513"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-IoCtlModule-cec2555b53b57ec507dc917b9aa10513"' :
                                            'id="xs-controllers-links-module-IoCtlModule-cec2555b53b57ec507dc917b9aa10513"' }>
                                            <li class="link">
                                                <a href="controllers/IoCtlController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IoCtlController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-IoCtlModule-cec2555b53b57ec507dc917b9aa10513"' : 'data-target="#xs-injectables-links-module-IoCtlModule-cec2555b53b57ec507dc917b9aa10513"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-IoCtlModule-cec2555b53b57ec507dc917b9aa10513"' :
                                        'id="xs-injectables-links-module-IoCtlModule-cec2555b53b57ec507dc917b9aa10513"' }>
                                        <li class="link">
                                            <a href="injectables/IoctlService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>IoctlService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link">MailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-MailModule-6236dcf66ed165871270294f6ad678a7"' : 'data-target="#xs-controllers-links-module-MailModule-6236dcf66ed165871270294f6ad678a7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MailModule-6236dcf66ed165871270294f6ad678a7"' :
                                            'id="xs-controllers-links-module-MailModule-6236dcf66ed165871270294f6ad678a7"' }>
                                            <li class="link">
                                                <a href="controllers/MailController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MailModule-6236dcf66ed165871270294f6ad678a7"' : 'data-target="#xs-injectables-links-module-MailModule-6236dcf66ed165871270294f6ad678a7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-6236dcf66ed165871270294f6ad678a7"' :
                                        'id="xs-injectables-links-module-MailModule-6236dcf66ed165871270294f6ad678a7"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PanelModule.html" data-type="entity-link">PanelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PanelModule-1ef605e1db578676afd817708ddf3f6b"' : 'data-target="#xs-controllers-links-module-PanelModule-1ef605e1db578676afd817708ddf3f6b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PanelModule-1ef605e1db578676afd817708ddf3f6b"' :
                                            'id="xs-controllers-links-module-PanelModule-1ef605e1db578676afd817708ddf3f6b"' }>
                                            <li class="link">
                                                <a href="controllers/PanelController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PanelController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PanelModule-1ef605e1db578676afd817708ddf3f6b"' : 'data-target="#xs-injectables-links-module-PanelModule-1ef605e1db578676afd817708ddf3f6b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PanelModule-1ef605e1db578676afd817708ddf3f6b"' :
                                        'id="xs-injectables-links-module-PanelModule-1ef605e1db578676afd817708ddf3f6b"' }>
                                        <li class="link">
                                            <a href="injectables/PanelService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PanelService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-b0a4b25a1a7141c1a0692cd9da77ec52"' : 'data-target="#xs-controllers-links-module-UserModule-b0a4b25a1a7141c1a0692cd9da77ec52"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-b0a4b25a1a7141c1a0692cd9da77ec52"' :
                                            'id="xs-controllers-links-module-UserModule-b0a4b25a1a7141c1a0692cd9da77ec52"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-b0a4b25a1a7141c1a0692cd9da77ec52"' : 'data-target="#xs-injectables-links-module-UserModule-b0a4b25a1a7141c1a0692cd9da77ec52"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-b0a4b25a1a7141c1a0692cd9da77ec52"' :
                                        'id="xs-injectables-links-module-UserModule-b0a4b25a1a7141c1a0692cd9da77ec52"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ZonaModule.html" data-type="entity-link">ZonaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ZonaModule-85f1dc37c83a762c2897b329b343d6f2"' : 'data-target="#xs-controllers-links-module-ZonaModule-85f1dc37c83a762c2897b329b343d6f2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ZonaModule-85f1dc37c83a762c2897b329b343d6f2"' :
                                            'id="xs-controllers-links-module-ZonaModule-85f1dc37c83a762c2897b329b343d6f2"' }>
                                            <li class="link">
                                                <a href="controllers/ZonaController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ZonaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ZonaModule-85f1dc37c83a762c2897b329b343d6f2"' : 'data-target="#xs-injectables-links-module-ZonaModule-85f1dc37c83a762c2897b329b343d6f2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ZonaModule-85f1dc37c83a762c2897b329b343d6f2"' :
                                        'id="xs-injectables-links-module-ZonaModule-85f1dc37c83a762c2897b329b343d6f2"' }>
                                        <li class="link">
                                            <a href="injectables/ZonaService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ZonaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link">AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BillingController.html" data-type="entity-link">BillingController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ClientController.html" data-type="entity-link">ClientController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DeviceController.html" data-type="entity-link">DeviceController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/IoCtlController.html" data-type="entity-link">IoCtlController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MailController.html" data-type="entity-link">MailController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PanelController.html" data-type="entity-link">PanelController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link">UserController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ZonaController.html" data-type="entity-link">ZonaController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Billing.html" data-type="entity-link">Billing</a>
                            </li>
                            <li class="link">
                                <a href="classes/Client.html" data-type="entity-link">Client</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrentMonthDashboard.html" data-type="entity-link">CurrentMonthDashboard</a>
                            </li>
                            <li class="link">
                                <a href="classes/Device.html" data-type="entity-link">Device</a>
                            </li>
                            <li class="link">
                                <a href="classes/IoCtl.html" data-type="entity-link">IoCtl</a>
                            </li>
                            <li class="link">
                                <a href="classes/Mail.html" data-type="entity-link">Mail</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaginateIoctl.html" data-type="entity-link">PaginateIoctl</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pagination.html" data-type="entity-link">Pagination</a>
                            </li>
                            <li class="link">
                                <a href="classes/Panel.html" data-type="entity-link">Panel</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReportSaving.html" data-type="entity-link">ReportSaving</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReportSavingDetail.html" data-type="entity-link">ReportSavingDetail</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLogin.html" data-type="entity-link">UserLogin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Zona.html" data-type="entity-link">Zona</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BillingService.html" data-type="entity-link">BillingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClientService.html" data-type="entity-link">ClientService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClusterService.html" data-type="entity-link">ClusterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeviceService.html" data-type="entity-link">DeviceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IoctlService.html" data-type="entity-link">IoctlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link">JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link">JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link">MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PanelService.html" data-type="entity-link">PanelService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ZonaService.html" data-type="entity-link">ZonaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link">AdminGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});