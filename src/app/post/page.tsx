"use client"
import React, { useState } from 'react';
import Navbar from "../Navbar";
import JobList from "../Components/JobList";
import {JobCard} from "../../stories/Job-Card";
import {Form} from "../Components/Form";
import {NavBar} from "../../stories/NavBar";
import { title } from "process";

/**
 * Primary UI component for user interaction
 */

  const str=`🤓 Engineer </option><option value="dev">
  🤓 Developer </option><option value="finance">
  💰 Finance </option><option value="sys admin">
  ♾️ Sys Admin </option><option value="javascript">
  ☕️ JavaScript </option><option value="backend">
  🍑 Backend </option><option value="golang">
  🐀 Golang </option><option value="cloud">
  ☁️ Cloud </option><option value="medical">
  🚑 Medical </option><option value="front end">
  🎨 Front End </option><option value="full stack">
  🥞 Full Stack </option><option value="ops">
  ♾️ Ops </option><option value="react">
  ⚛️ React </option><option value="infosec">
  🔑 InfoSec </option><option value="marketing">
  🚥 Marketing </option><option value="mobile">
  📱 Mobile </option><option value="content writing">
  ✍️ Content Writing </option><option value="saas">
  📦 SaaS </option><option value="recruiter">
  🎯 Recruiter </option><option value="full time">
  ⏰ Full Time </option><option value="api">
  🤖 API </option><option value="ruby">
  💎 Ruby </option><option value="education">
  👨‍🏫 Education </option><option value="devops">
  ♾️ DevOps </option><option value="stats">
  👩‍🔬 Stats </option><option value="python">
  🐍 Python </option><option value="node">
  🔗 Node </option><option value="english">
  🇬🇧 English </option><option value="non tech">
  🔌 Non Tech </option><option value="video">
  📼 Video </option><option value="travel">
  🎒 Travel </option><option value="quality assurance">
  🔬 Quality Assurance </option><option value="ecommerce">
  🛍 Ecommerce </option><option value="teaching">
  👨‍🏫 Teaching </option><option value="linux">
  🐧 Linux </option><option value="java">
  ☕️ Java </option><option value="crypto">
  🏅 Crypto </option><option value="junior">
  👶 Junior </option><option value="git">
  📦 Git </option><option value="legal">
  👩‍⚖️ Legal </option><option value="android">
  🤖 Android </option><option value="accounting">
  💼 Accounting </option><option value="admin">
  ♾️ Admin </option><option value="microsoft">
  🖼 Microsoft </option><option value="excel">
  📗 Excel </option><option value="php">
  🐘 PHP </option><option value="amazon">
  ☁️ Amazon </option><option value="serverless">
  ☁️ Serverless </option><option value="css">
  🎨 CSS </option><option value="software">
  🤓 Software </option><option value="analyst">
  🤔 Analyst </option><option value="angular">
  🅰️ Angular </option><option value="ios">
  🍏 iOS </option><option value="html">
  🔡 HTML </option><option value="salesforce">
  ☁️ Salesforce </option><option value="ads">
  🚥 Ads </option><option value="product designer">
  📦 Product Designer </option><option value="hr">
  👋 HR </option><option value="sql">
  🐬 SQL </option><option value="c">
  🔷 C </option><option value="web dev">
  🤓 Web Developer </option><option value="nosql">
  🚫 NoSQL </option><option value="postgres">
  🐬 Postgres </option><option value="c plus plus">
  ➕ C Plus Plus </option><option value="part time">
  ⏰ Part Time </option><option value="jira">
  🔷 Jira </option><option value="c sharp">
  #️⃣ C Sharp </option><option value="seo">
  🔎 SEO </option><option value="apache">
  🚁 Apache </option><option value="data science">
  👩‍🔬 Data Science </option><option value="virtual assistant">
  🎧 Virtual Assistant </option><option value="react native">
  ⚛️ React Native </option><option value="mongo">
  🍃 Mongo </option><option value="testing">
  🧪 Testing </option><option value="architecture">
  📦 Architecture </option><option value="director">
  🔷 Director </option><option value="music">
  🎵 Music </option><option value="shopify">
  🛍 Shopify </option><option value="wordpress">
  ✍️ Wordpress </option><option value="laravel">
  📦 Laravel </option><option value="elasticsearch">
  🧩 Elasticsearch </option><option value="blockchain">
  ⛓ Blockchain </option><option value="web3">
  💎 Web3 </option><option value="drupal">
  💧 Drupal </option><option value="docker">
  🐳 Docker </option><option value="graphql">
  ⚛️ GraphQL </option><option value="payroll">
  💼 Payroll </option><option value="internship">
  👩‍🎓 Internship </option><option value="machine learning">
  🤖 Machine Learning </option><option value="architect">
  📦 Architect </option><option value="scala">
  ☕️ Scala </option><option value="web">
  🎨 Web </option><option value="objective c">
  🍏 Objective C </option><option value="social media">
  ✍️ Social Media </option><option value="vue">
  💚 Vue </option><option value="biotech">
  💊 Biotech </option><option value="math">
  🧮 Math </option><option value="nft">
  🖼 NFT </option><option value="scheme">
  👄 Scheme </option><option value="dba">
  🥞 Database Admin </option><option value="game dev">
  🕹 Game Developer </option><option value="test">
  🧪 Test </option><option value="copywriting">
  ✍️ Copywriting </option><option value="typescript">
  🟦 Typescript </option><option value="consulting">
  💼 Consulting </option><option value="growth">
  🚀 Growth </option><option value="heroku">
  🟪 Heroku </option><option value="swift">
  🐇 Swift </option><option value="tech lead">
  👩‍✈️ Tech Lead </option><option value="flutter">
  🦩 Flutter </option><option value="jquery">
  🧩 jQuery </option><option value="firebase">
  🔥 Firebase </option><option value="robotics">
  🤖 Robotics </option><option value="english teacher">
  🇬🇧 English Teacher </option><option value="assembly">
  Assembly </option><option value="redis">
  🧠 Redis </option><option value="meteor">
  ☄️ Meteor </option><option value="lamp">
  🐘 LAMP </option><option value="aws">
  ☁️ AWS </option><option value="nginx">
  ❇️ Nginx </option><option value="clojure">
  ☯️ Clojure </option><option value="consultant">
  💼 Consultant </option><option value="training">
  👨‍🏫 Training </option><option value="defi">
  💰 Defi </option><option value="solidity">
  ⛓ Solidity </option><option value="embedded">
  💡 Embedded </option><option value="ethereum">
  💎 Ethereum </option><option value="haskell">
  #️⃣ Haskell </option><option value="big data">
  🧠 Big Data </option><option value="cassandra">
  🔷 Cassandra </option><option value="photoshop">
  🎨 Photoshop </option><option value="xamarin">
  ❎ Xamarin </option><option value="ember">
  🐹 Ember </option><option value="bus dev">
  💼 Bus Developer </option><option value="adult">
  🌶 Adult </option><option value="telecom">
  🔷 Telecom </option><option value="scrum">
  🔁 Scrum </option><option value="rust">
  🦀 Rust </option><option value="perl">
  🐪 Perl </option><option value="illustrator">
  🎨 Illustrator </option><option value="macos">
  🍏 macOS </option><option value="telecommuting">
  🔷 Telecommuting </option><option value="symfony">
  📦 Symfony </option><option value="erlang">
  🟥 Erlang </option><option value="ansible">
  ⚫️ Ansible </option><option value="f sharp">
  F Sharp </option><option value="mern">
  Mern </option><option value="esports">
  Esports </option><option value="redux">
  ⚛️ Redux </option><option value="couchbase">
  🔷 Couchbase </option><option value="vfx">
  VFX </option><option value="post production">
  📦 Post Production </option><option value="kubernetes">
  🦑 Kubernetes </option><option value="designer">
  🎨 Designer </option><option value="data">
  👩‍🔬 Data </option><option value="smart contracts">
  📋 Smart Contracts </option><option value="bitcoin">
  🏅 Bitcoin </option><option value="groovy">
  🍸 Groovy </option><option value="b2b">
  💼 B2B </option><option value="dataops">
  ♾️ DataOps </option><option value="django">
  🤠 Django </option><option value="chatbot">
  🔷 Chatbot </option><option value="startup">
  🚀 Startup </option><option value="grafana">
  Grafana </option><option value="product">
  📦 Product </option><option value="health tech">
  🚑 Health Tech </option><option value="rabbitmq">
  Rabbitmq </option><option value="copywriter">
  🔷 Copywriter </option><option value="net">
  🌊 Net </option><option value="distributed systems">
  ♾️ Distributed Systems </option><option value="azure">
  ☁️ Azure </option><option value="smart contract">
  📋 Smart Contract </option><option value="data viz">
  👩‍🔬 Data Viz </option><option value="project management">
  💼 Project Management </option><option value="work from home">
  Work from Home </option><option value="controller">
  🔷 Controller </option><option value="dot net">
  🌊 Dot NET </option><option value="fastapi">
  🤖 Fastapi </option><option value="flask">
  🍼 Flask </option><option value="figma">
  🎨 Figma </option><option value="gaming">
  Gaming </option><option value="leadership">
  💼 Leadership </option><option value="kafka">
  🚁 Kafka </option><option value="automic design">
  🎨 Automic Design </option><option value="other">
  ❓ Other </option><option value="kotlin">
  ☕️ Kotlin </option><option value="open source">
  🧩 Open Source </option><option value="next">
  ➡️ Next </option><option value="gcp">
  ☁️ GCP </option><option value="algorithms">
  👩‍🔬 Algorithms </option><option value="outreach">
  🔷 Outreach </option><option value="jest">
  🃏 Jest </option><option value="pandas">
  🐼 Pandas </option><option value="product management">
  💼 Product Management </option><option value="data processing">
  👩‍🔬 Data Processing </option><option value="product design">
  🎨 Product Design </option><option value="remote">
  🏝 Remote </option><option value="tester">
  🧪 Tester </option><option value="data structures">
  👩‍🔬 Data Structures </option><option value="martech">
  ⚙️ Martech </option><option value="crm">
  🧠 CRM </option><option value="game">
  🕹 Game </option><option value="tech">
  ⚙️ Tech </option><option value="hardware">
  Hardware </option><option value="scalability">
  ☕️ Scalability </option><option value="insurance">
  🔷 Insurance </option><option value="software engineer">
  🤓 Software Engineer </option><option value="bootstrap">
  🟪 Bootstrap </option><option value="writing">
  ✍️ Writing </option><option value="virtual reality">
  Virtual Reality </option><option value="mobiledev">
  🤓 Mobiledev </option><option value="terraform">
  🌳 Terraform </option><option value="etl">
  Etl </option><option value="infrastructure">
  🌉 Infrastructure </option><option value="matlab">
  👩‍🔬 Matlab </option><option value="ml">
  🧠 Ml </option><option value="ceo">
  🔷 Ceo </option><option value="landing page">
  Landing Page </option><option value="monitoring">
  Monitoring </option><option value="infra">
  🌉 Infra </option><option value="project manager">
  💼 Project Manager </option><option value="webrtc">
  🔷 Webrtc </option><option value="windows">
  🪟 Windows </option><option value="platform">
  Platform </option><option value="cryptography">
  🏅 Cryptography </option><option value="memory tuning">
  Memory Tuning </option><option value="performance">
  🔷 Performance </option><option value="applicationdev">
  🤓 Applicationdev </option><option value="web app">
  Web App </option><option value="linode">
  🔗 Linode </option><option value="associate">
  ♾️ Associate </option><option value="tokyo">
  Tokyo </option><option value="revenue">
  Revenue </option><option value="abap">
  Abap </option><option value="vc">
  🔷 Vc </option><option value="stimulus">
  Stimulus </option><option value="funding">
  Funding </option><option value="hoteltech">
  ⚙️ Hoteltech </option><option value="japan">
  Japan </option><option value="sre">
  Sre </option><option value="speech">
  🔷 Speech </option><option value="social impact">
  ♾️ Social Impact </option><option value="google cloud">
  ☁️ Google Cloud </option><option value="data entry">
  👩‍🔬 Data Entry </option><option value="onboarding">
  Onboarding </option><option value="product manager">
  📦 Product Manager </option><option value="evm">
  Evm </option><option value="writer">
  Writer </option><option value="community">
  🙏 Community </option><option value="cybersecurity">
  🔑 Cybersecurity </option><option value="microservices">
  ⚙️ Microservices </option><option value="seed">
  Seed </option><option value="platform engineer">
  🤓 Platform Engineer </option><option value="dao">
  Dao </option><option value="dynamodb">
  🧠 Dynamodb </option><option value="creative">
  🔷 Creative </option><option value="agile">
  🐇 Agile </option><option value="magento">
  🔸 Magento </option><option value="code">
  🧩 Code </option><option value="fun">
  Fun </option><option value="nestjs">
  ☕️ Nest JS </option><option value="databases">
  🧠 Databases </option><option value="obj c">
  🔷 Obj C </option><option value="net core">
  🔷 Net Core </option><option value="tailwind">
  🌊 Tailwind </option><option value="support">
  🎧 Support </option><option value="technology">
  ⚙️ Technology </option><option value="dashboard">
  Dashboard </option><option value="site reliability engineer">
  ♾️ Site Reliability Engineer </option><option value="analysis">
  Analysis </option><option value="reactnative">
  ⚛️ Reactnative </option> <option value="senior">
  👵 Senior </option><option value="exec">
  💼 Executive </option><option value="customer support">
  🎧 Customer Support </option><option value="design">
  🎨 Design </option><option value="sales">
  💼 Sales </option></select><div class="ts-wrapper select_tags multi plugin-remove_button has-items" bis_skin_checked="1"><div class="ts-control" bis_skin_checked="1"><div data-value="senior" class="item" data-ts-item="" bis_skin_checked="1">
  👵 Senior <a href="javascript:void(0)" class="remove" tabindex="-1" title="Remove">×</a></div><div data-value="exec" class="item" data-ts-item="" bis_skin_checked="1">
  💼 Executive <a href="javascript:void(0)" class="remove" tabindex="-1" title="Remove">×</a></div><div data-value="customer support" class="item" data-ts-item="" bis_skin_checked="1">
  🎧 Customer Support <a href="javascript:void(0)" class="remove" tabindex="-1" title="Remove">×</a></div><div data-value="design" class="item" data-ts-item="" bis_skin_checked="1">
  🎨 Design <a href="javascript:void(0)" class="remove" tabindex="-1" title="Remove">×</a></div><div data-value="sales" class="item" data-ts-item="" bis_skin_checked="1">
  💼 Sales <a href="javascript:void(0)" class="remove" tabindex="-1" title="Remove">×</a></div><input type="select-multiple" autocomplete="off" size="1" tabindex="0" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="select_tags-ts-dropdown" id="select_tags-ts-control" placeholder="Type a tag or keyword to search and add it" fdprocessedid="61jogs"></div><div class="ts-dropdown multi plugin-remove_button" bis_skin_checked="1" style="display: none; visibility: visible;"><div role="listbox" tabindex="-1" class="ts-dropdown-content" id="select_tags-ts-dropdown" bis_skin_checked="1"><div data-selectable="" data-value="engineer" class="option" role="option" id="select_tags-opt-1" bis_skin_checked="1">
  🤓 Engineer </div><div data-selectable="" data-value="dev" class="option" role="option" id="select_tags-opt-4" bis_skin_checked="1">
  🤓 Developer </div><div data-selectable="" data-value="finance" class="option" role="option" id="select_tags-opt-5" bis_skin_checked="1">
  💰 Finance </div><div data-selectable="" data-value="sys admin" class="option" role="option" id="select_tags-opt-6" bis_skin_checked="1">
  ♾️ Sys Admin </div><div data-selectable="" data-value="javascript" class="option" role="option" id="select_tags-opt-7" bis_skin_checked="1">
  ☕️ JavaScript </div><div data-selectable="" data-value="backend" class="option" role="option" id="select_tags-opt-8" bis_skin_checked="1">
  🍑 Backend </div><div data-selectable="" data-value="golang" class="option" role="option" id="select_tags-opt-9" bis_skin_checked="1">
  🐀 Golang </div><div data-selectable="" data-value="cloud" class="option" role="option" id="select_tags-opt-10" bis_skin_checked="1">
  ☁️ Cloud </div><div data-selectable="" data-value="medical" class="option" role="option" id="select_tags-opt-11" bis_skin_checked="1">
  🚑 Medical </div><div data-selectable="" data-value="front end" class="option" role="option" id="select_tags-opt-12" bis_skin_checked="1">
  🎨 Front End </div><div data-selectable="" data-value="full stack" class="option" role="option" id="select_tags-opt-13" bis_skin_checked="1">
  🥞 Full Stack </div><div data-selectable="" data-value="ops" class="option" role="option" id="select_tags-opt-14" bis_skin_checked="1">
  ♾️ Ops </div><div data-selectable="" data-value="react" class="option" role="option" id="select_tags-opt-16" bis_skin_checked="1">
  ⚛️ React </div><div data-selectable="" data-value="infosec" class="option" role="option" id="select_tags-opt-17" bis_skin_checked="1">
  🔑 InfoSec </div><div data-selectable="" data-value="marketing" class="option" role="option" id="select_tags-opt-18" bis_skin_checked="1">
  🚥 Marketing </div><div data-selectable="" data-value="mobile" class="option" role="option" id="select_tags-opt-19" bis_skin_checked="1">
  📱 Mobile </div><div data-selectable="" data-value="content writing" class="option" role="option" id="select_tags-opt-20" bis_skin_checked="1">
  ✍️ Content Writing </div><div data-selectable="" data-value="saas" class="option" role="option" id="select_tags-opt-21" bis_skin_checked="1">
  📦 SaaS </div><div data-selectable="" data-value="recruiter" class="option" role="option" id="select_tags-opt-22" bis_skin_checked="1">
  🎯 Recruiter </div><div data-selectable="" data-value="full time" class="option" role="option" id="select_tags-opt-23" bis_skin_checked="1">
  ⏰ Full Time </div><div data-selectable="" data-value="api" class="option" role="option" id="select_tags-opt-24" bis_skin_checked="1">
  🤖 API </div><div data-selectable="" data-value="ruby" class="option" role="option" id="select_tags-opt-26" bis_skin_checked="1">
  💎 Ruby </div><div data-selectable="" data-value="education" class="option" role="option" id="select_tags-opt-27" bis_skin_checked="1">
  👨‍🏫 Education </div><div data-selectable="" data-value="devops" class="option" role="option" id="select_tags-opt-28" bis_skin_checked="1">
  ♾️ DevOps </div><div data-selectable="" data-value="stats" class="option" role="option" id="select_tags-opt-29" bis_skin_checked="1">
  👩‍🔬 Stats </div><div data-selectable="" data-value="python" class="option" role="option" id="select_tags-opt-30" bis_skin_checked="1">
  🐍 Python </div><div data-selectable="" data-value="node" class="option" role="option" id="select_tags-opt-31" bis_skin_checked="1">
  🔗 Node </div><div data-selectable="" data-value="english" class="option" role="option" id="select_tags-opt-32" bis_skin_checked="1">
  🇬🇧 English </div><div data-selectable="" data-value="non tech" class="option" role="option" id="select_tags-opt-33" bis_skin_checked="1">
  🔌 Non Tech </div><div data-selectable="" data-value="video" class="option" role="option" id="select_tags-opt-34" bis_skin_checked="1">
  📼 Video </div><div data-selectable="" data-value="travel" class="option" role="option" id="select_tags-opt-35" bis_skin_checked="1">
  🎒 Travel </div><div data-selectable="" data-value="quality assurance" class="option" role="option" id="select_tags-opt-36" bis_skin_checked="1">
  🔬 Quality Assurance </div><div data-selectable="" data-value="ecommerce" class="option" role="option" id="select_tags-opt-37" bis_skin_checked="1">
  🛍 Ecommerce </div><div data-selectable="" data-value="teaching" class="option" role="option" id="select_tags-opt-38" bis_skin_checked="1">
  👨‍🏫 Teaching </div><div data-selectable="" data-value="linux" class="option" role="option" id="select_tags-opt-39" bis_skin_checked="1">
  🐧 Linux </div><div data-selectable="" data-value="java" class="option" role="option" id="select_tags-opt-40" bis_skin_checked="1">
  ☕️ Java </div><div data-selectable="" data-value="crypto" class="option" role="option" id="select_tags-opt-41" bis_skin_checked="1">
  🏅 Crypto </div><div data-selectable="" data-value="junior" class="option" role="option" id="select_tags-opt-42" bis_skin_checked="1">
  👶 Junior </div><div data-selectable="" data-value="git" class="option" role="option" id="select_tags-opt-43" bis_skin_checked="1">
  📦 Git </div><div data-selectable="" data-value="legal" class="option" role="option" id="select_tags-opt-44" bis_skin_checked="1">
  👩‍⚖️ Legal </div><div data-selectable="" data-value="android" class="option" role="option" id="select_tags-opt-45" bis_skin_checked="1">
  🤖 Android </div><div data-selectable="" data-value="accounting" class="option" role="option" id="select_tags-opt-46" bis_skin_checked="1">
  💼 Accounting </div><div data-selectable="" data-value="admin" class="option" role="option" id="select_tags-opt-47" bis_skin_checked="1">
  ♾️ Admin </div><div data-selectable="" data-value="microsoft" class="option" role="option" id="select_tags-opt-48" bis_skin_checked="1">
  🖼 Microsoft </div><div data-selectable="" data-value="excel" class="option" role="option" id="select_tags-opt-49" bis_skin_checked="1">
  📗 Excel </div><div data-selectable="" data-value="php" class="option" role="option" id="select_tags-opt-50" bis_skin_checked="1">
  🐘 PHP </div><div data-selectable="" data-value="amazon" class="option" role="option" id="select_tags-opt-51" bis_skin_checked="1">
  ☁️ Amazon </div><div data-selectable="" data-value="serverless" class="option" role="option" id="select_tags-opt-52" bis_skin_checked="1">
  ☁️ Serverless </div><div data-selectable="" data-value="css" class="option" role="option" id="select_tags-opt-53" bis_skin_checked="1">
  🎨 CSS </div><div data-selectable="" data-value="software" class="option" role="option" id="select_tags-opt-54" bis_skin_checked="1">
  🤓 Software </div></div></div></div>`;
  let out="";
  
  const sarr=str.split("\n").map((tag, index) => {out+=`{"label":"`;out+=tag.substring(0, tag.indexOf("<"));out+=`"},`});console.log(out);

  const str1=`🦁 Africa </option><option value="region_AS">
⛩ Asia </option><option value="region_EU">
🇪🇺 Europe </option><option value="region_LA">
💃 Latin America </option><option value="region_ME">
🕌 Middle East </option><option value="region_NA">
⛰️ North America </option><option value="region_OC">
🌊 Oceania </option> </optgroup>
<optgroup label="Countries">
<option value="AF">
🇦🇫 Afghanistan </option><option value="AL">
🇦🇱 Albania </option><option value="DZ">
🇩🇿 Algeria </option><option value="AS">
🇦🇸 American Samoa </option><option value="AD">
🇦🇩 Andorra </option><option value="AO">
🇦🇴 Angola </option><option value="AI">
🇦🇮 Anguilla </option><option value="AQ">
🇦🇶 Antarctica </option><option value="AG">
🇦🇬 Antigua and Barbuda </option><option value="AR">
🇦🇷 Argentina </option><option value="AM">
🇦🇲 Armenia </option><option value="AW">
🇦🇼 Aruba </option><option value="AU">
🇦🇺 Australia </option><option value="AT">
🇦🇹 Austria </option><option value="AZ">
🇦🇿 Azerbaijan </option><option value="BH">
🇧🇭 Bahrain </option><option value="BD">
🇧🇩 Bangladesh </option><option value="BB">
🇧🇧 Barbados </option><option value="BY">
🇧🇾 Belarus </option><option value="BE">
🇧🇪 Belgium </option><option value="BZ">
🇧🇿 Belize </option><option value="BJ">
🇧🇯 Benin </option><option value="BM">
🇧🇲 Bermuda </option><option value="BT">
🇧🇹 Bhutan </option><option value="BO">
🇧🇴 Bolivia </option><option value="BA">
🇧🇦 Bosnia </option><option value="BW">
🇧🇼 Botswana </option><option value="BV">
🇧🇻 Bouvet Island </option><option value="BR">
🇧🇷 Brazil </option><option value="IO">
🇮🇴 British Indian Ocean Territory </option><option value="VG">
🇻🇬 British Virgin Islands </option><option value="BN">
🇧🇳 Brunei </option><option value="BG">
🇧🇬 Bulgaria </option><option value="BF">
🇧🇫 Burkina Faso </option><option value="BI">
🇧🇮 Burundi </option><option value="KH">
🇰🇭 Cambodia </option><option value="CM">
🇨🇲 Cameroon </option><option value="CA">
🇨🇦 Canada </option><option value="CV">
🇨🇻 Cape Verde </option><option value="BQ">
🇧🇶 Caribbean Netherlands </option><option value="KY">
🇰🇾 Cayman Islands </option><option value="CF">
🇨🇫 Central African Republic </option><option value="TD">
🇹🇩 Chad </option><option value="CL">
🇨🇱 Chile </option><option value="CN">
🇨🇳 China </option><option value="CX">
🇨🇽 Christmas Island </option><option value="CC">
🇨🇨 Cocos Islands </option><option value="CO">
🇨🇴 Colombia </option><option value="KM">
🇰🇲 Comoros </option><option value="CG">
🇨🇬 Congo </option><option value="CK">
🇨🇰 Cook Islands </option><option value="CR">
🇨🇷 Costa Rica </option><option value="CI">
🇨🇮 Cote d'Ivoire </option><option value="HR">
🇭🇷 Croatia </option><option value="CU">
🇨🇺 Cuba </option><option value="CW">
🇨🇼 Curaçao </option><option value="CY">
🇨🇾 Cyprus </option><option value="CZ">
🇨🇿 Czechia </option><option value="CD">
🇨🇩 DR Congo </option><option value="DK">
🇩🇰 Denmark </option><option value="DJ">
🇩🇯 Djibouti </option><option value="DM">
🇩🇲 Dominica </option><option value="DO">
🇩🇴 Dominican Republic </option><option value="TL">
🇹🇱 East Timor </option><option value="EC">
🇪🇨 Ecuador </option><option value="EG">
🇪🇬 Egypt </option><option value="SV">
🇸🇻 El Salvador </option><option value="GQ">
🇬🇶 Equatorial Guinea </option><option value="ER">
🇪🇷 Eritrea </option><option value="EE">
🇪🇪 Estonia </option><option value="ET">
🇪🇹 Ethiopia </option><option value="FK">
🇫🇰 Falkland Islands </option><option value="FO">
🇫🇴 Faroe Islands </option><option value="FJ">
🇫🇯 Fiji </option><option value="FI">
🇫🇮 Finland </option><option value="FR">
🇫🇷 France </option><option value="GF">
🇬🇫 French Guiana </option><option value="TF">
🇹🇫 French Southern Territories </option><option value="GA">
🇬🇦 Gabon </option><option value="GM">
🇬🇲 Gambia </option><option value="GE">
🇬🇪 Georgia </option><option value="DE">
🇩🇪 Germany </option><option value="GH">
🇬🇭 Ghana </option><option value="GI">
🇬🇮 Gibraltar </option><option value="GR">
🇬🇷 Greece </option><option value="GL">
🇬🇱 Greenland </option><option value="GD">
🇬🇩 Grenada </option><option value="GP">
🇬🇵 Guadeloupe </option><option value="GU">
🇬🇺 Guam </option><option value="GT">
🇬🇹 Guatemala </option><option value="GG">
🇬🇬 Guernsey </option><option value="GN">
🇬🇳 Guinea </option><option value="GW">
🇬🇼 Guinea Bissau </option><option value="GY">
🇬🇾 Guyana </option><option value="HT">
🇭🇹 Haiti </option><option value="US-HI">
🏝 Hawaii </option><option value="HM">
🇭🇲 Heard Island and McDonald Islands </option><option value="HN">
🇭🇳 Honduras </option><option value="HK">
🇭🇰 Hong Kong </option><option value="HU">
🇭🇺 Hungary </option><option value="IS">
🇮🇸 Iceland </option><option value="IN">
🇮🇳 India </option><option value="ID">
🇮🇩 Indonesia </option><option value="IR">
🇮🇷 Iran </option><option value="IQ">
🇮🇶 Iraq </option><option value="IE">
🇮🇪 Ireland </option><option value="IM">
🇮🇲 Isle of Man </option><option value="IL">
🇮🇱 Israel </option><option value="IT">
🇮🇹 Italy </option><option value="JM">
🇯🇲 Jamaica </option><option value="JP">
🇯🇵 Japan </option><option value="JE">
🇯🇪 Jersey </option><option value="JO">
🇯🇴 Jordan </option><option value="KZ">
🇰🇿 Kazakhstan </option><option value="KE">
🇰🇪 Kenya </option><option value="KI">
🇰🇮 Kiribati </option><option value="XK">
🇽🇰 Kosovo </option><option value="KS">
🇽🇰 Kosovo </option><option value="KU">
🏴 Kurdistan </option><option value="KW">
🇰🇼 Kuwait </option><option value="KG">
🇰🇬 Kyrgyzstan </option><option value="LA">
🇱🇦 Laos </option><option value="LV">
🇱🇻 Latvia </option><option value="LB">
🇱🇧 Lebanon </option><option value="LS">
🇱🇸 Lesotho </option><option value="LR">
🇱🇷 Liberia </option><option value="LY">
🇱🇾 Libya </option><option value="LI">
🇱🇮 Liechtenstein </option><option value="LT">
🇱🇹 Lithuania </option><option value="LU">
🇱🇺 Luxembourg </option><option value="MO">
🇲🇴 Macau </option><option value="MG">
🇲🇬 Madagascar </option><option value="MW">
🇲🇼 Malawi </option><option value="MY">
🇲🇾 Malaysia </option><option value="MV">
🇲🇻 Maldives </option><option value="ML">
🇲🇱 Mali </option><option value="MT">
🇲🇹 Malta </option><option value="MH">
🇲🇭 Marshall Islands </option><option value="MQ">
🇲🇶 Martinique </option><option value="MR">
🇲🇷 Mauritania </option><option value="MU">
🇲🇺 Mauritius </option><option value="YT">
🇾🇹 Mayotte </option><option value="MX">
🇲🇽 Mexico </option><option value="FM">
🇫🇲 Micronesia </option><option value="MD">
🇲🇩 Moldova </option><option value="MC">
🇲🇨 Monaco </option><option value="MN">
🇲🇳 Mongolia </option><option value="ME">
🇲🇪 Montenegro </option><option value="MS">
🇲🇸 Montserrat </option><option value="MA">
🇲🇦 Morocco </option><option value="MZ">
🇲🇿 Mozambique </option><option value="MM">
🇲🇲 Myanmar </option><option value="NA">
🇳🇦 Namibia </option><option value="NR">
🇳🇷 Nauru </option><option value="NP">
🇳🇵 Nepal </option><option value="NL">
🇳🇱 Netherlands </option><option value="NC">
🇳🇨 New Caledonia </option><option value="NZ">
🇳🇿 New Zealand </option><option value="NI">
🇳🇮 Nicaragua </option><option value="NE">
🇳🇪 Niger </option><option value="NG">
🇳🇬 Nigeria </option><option value="NU">
🇳🇺 Niue </option><option value="NF">
🇳🇫 Norfolk Island </option><option value="KP">
🇰🇵 North Korea </option><option value="MK">
🇲🇰 North Macedonia </option><option value="MP">
🇲🇵 Northern Mariana Islands </option><option value="NO">
🇳🇴 Norway </option><option value="OM">
🇴🇲 Oman </option><option value="PK">
🇵🇰 Pakistan </option><option value="PW">
🇵🇼 Palau </option><option value="PS">
🇵🇸 Palestine </option><option value="PA">
🇵🇦 Panama </option><option value="PG">
🇵🇬 Papua New Guinea </option><option value="PY">
🇵🇾 Paraguay </option><option value="PE">
🇵🇪 Peru </option><option value="PH">
🇵🇭 Philippines </option><option value="PN">
🇵🇳 Pitcairn Island </option><option value="PL">
🇵🇱 Poland </option><option value="PF">
🇵🇫 Polynesia </option><option value="PT">
🇵🇹 Portugal </option><option value="PR">
🇵🇷 Puerto Rico </option><option value="QA">
🇶🇦 Qatar </option><option value="RE">
🇷🇪 Reunion </option><option value="RO">
🇷🇴 Romania </option><option value="RU">
🇷🇺 Russia </option><option value="RW">
🇷🇼 Rwanda </option><option value="SH">
🇸🇭 Saint Helena </option><option value="KN">
🇰🇳 Saint Kitts and Nevis </option><option value="LC">
🇱🇨 Saint Lucia </option><option value="PM">
🇵🇲 Saint Pierre and Miquelon </option><option value="VC">
🇻🇨 Saint Vincent and the Grenadines </option><option value="MF">
🇲🇫 Saint-Martin </option><option value="WS">
🇼🇸 Samoa </option><option value="SM">
🇸🇲 San Marino </option><option value="ST">
🇸🇹 Sao Tome and Principe </option><option value="SA">
🇸🇦 Saudi Arabia </option><option value="SN">
🇸🇳 Senegal </option><option value="RS">
🇷🇸 Serbia </option><option value="SC">
🇸🇨 Seychelles </option><option value="SL">
🇸🇱 Sierra Leone </option><option value="SG">
🇸🇬 Singapore </option><option value="SX">
🇸🇽 Sint Maarten </option><option value="SK">
🇸🇰 Slovakia </option><option value="SI">
🇸🇮 Slovenia </option><option value="SB">
🇸🇧 Solomon Islands </option><option value="SO">
🇸🇴 Somalia </option><option value="ZA">
🇿🇦 South Africa </option><option value="GS">
🇬🇸 South Georgia and the South Sandwich Islands </option><option value="KR">
🇰🇷 South Korea </option><option value="SS">
🇸🇸 South Sudan </option><option value="ES">
🇪🇸 Spain </option><option value="LK">
🇱🇰 Sri Lanka </option><option value="SD">
🇸🇩 Sudan </option><option value="SR">
🇸🇷 Suriname </option><option value="SJ">
🇸🇯 Svalbard and Jan Mayen Islands </option><option value="SZ">
🇸🇿 Swaziland </option><option value="SE">
🇸🇪 Sweden </option><option value="CH">
🇨🇭 Switzerland </option><option value="SY">
🇸🇾 Syria </option><option value="TW">
🇹🇼 Taiwan </option><option value="TJ">
🇹🇯 Tajikistan </option><option value="TZ">
🇹🇿 Tanzania </option><option value="TH">
🇹🇭 Thailand </option><option value="BS">
🇧🇸 The Bahamas </option><option value="TG">
🇹🇬 Togo </option><option value="TK">
🇹🇰 Tokelau </option><option value="TO">
🇹🇴 Tonga </option><option value="TT">
🇹🇹 Trinidad and Tobago </option><option value="TN">
🇹🇳 Tunisia </option><option value="TR">
🇹🇷 Turkey </option><option value="TM">
🇹🇲 Turkmenistan </option><option value="TC">
🇹🇨 Turks and Caicos Islands </option><option value="TV">
🇹🇻 Tuvalu </option><option value="UM">
🇺🇲 USA Minor Outlying Islands </option><option value="UG">
🇺🇬 Uganda </option><option value="UA">
🇺🇦 Ukraine </option><option value="AE">
🇦🇪 United Arab Emirates </option><option value="UK">
🇬🇧 United Kingdom </option><option value="US">
🇺🇸 United States </option><option value="VI">
🇻🇮 United States Virgin Islands </option><option value="UY">
🇺🇾 Uruguay </option><option value="UZ">
🇺🇿 Uzbekistan </option><option value="VU">
🇻🇺 Vanuatu </option><option value="VA">
🇻🇦 Vatican City </option><option value="VE">
🇻🇪 Venezuela </option><option value="VN">
🇻🇳 Vietnam </option><option value="WF">
🇼🇫 Wallis and Futuna Islands </option><option value="EH">
🇪🇭 Western Sahara </option><option value="YE">
🇾🇪 Yemen </option><option value="ZM">
🇿🇲 Zambia </option><option value="ZW">
🇿🇼 Zimbabwe </option> </optgroup>
🌏 Worldwide </option></select><div class="ts-wrapper select_locations multi plugin-remove_button has-items"
`;
let out1="";

const sarr1=str1.split("\n").map((tag, index) => {out1+=`{"label":"`;out1+=tag.substring(0, tag.indexOf("<"));out1+=`"},`});console.log(out1);

export default function Home() {
  const [tgs, settgs] = React.useState('');const [tgs1, settgs1] = React.useState('');
  
  const [v11, set11] = useState<string>('');const handle11 = (event: React.ChangeEvent<HTMLInputElement>) => {set11(event.target.value);};
  const [v12, set12] = useState<string>('');const handle12 = (event: React.ChangeEvent<HTMLInputElement>) => {set12(event.target.value);};
  const [v13, set13] = useState<string>('');const handle13 = (event: React.ChangeEvent<HTMLSelectElement>) => {set13(event.target.value);};
  const [v14, set14] = useState<string>('');const handle14 = (event: React.ChangeEvent<HTMLSelectElement>) => {set14(event.target.value);};

  const [v21, set21] = useState<string>('');const handle21 = (event: React.ChangeEvent<HTMLInputElement>) => {set21(event.target.value);};
  const [v22, set22] = useState<string>('');const handle22 = (event: React.ChangeEvent<HTMLInputElement>) => {set22(event.target.value);};
  const [v23, set23] = useState<string>('');const handle23 = (event: React.ChangeEvent<HTMLInputElement>) => {set23(event.target.value);};
  const [v24, set24] = useState<string>('');const handle24 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {set24(event.target.value);};
  const [v25, set25] = useState<string>('');const handle25 = (event: React.ChangeEvent<HTMLInputElement>) => {set25(event.target.value);};

  const [v31, set31] = useState<string>('');const handle31 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {set31(event.target.value);};
  console.log(v23);




const f1={lbl:"LET'S START",
  fields:[{type:1,hdg:"COMPANY NAME*",body:"Sample",desc:"Your company's brand/trade name: without Inc., Ltd., B.V., Pte., etc.",val:v11,handle:handle11,}
  ,{type:1,hdg:"POSITION*",body:"Manager",desc:` Please specify as single job position like "Marketing Manager" or "Node JS Developer", not a sentence like "Looking for PM / Biz Dev / Manager". We know your job is important but please DO NOT WRITE IN FULL CAPS. If posting multiple roles, please create multiple job posts. A job post is limited to a single job. We only allow real jobs, absolutely no MLM-type courses "learn how to work online" please.`,val:v12,handle:handle12,},
  {type:3,hdg:"EMPLOYMENT TYPE*",body:"Full-time<Part-time<Contractor<Temporary<Internship<Per diem<Volunteer<Onsite",desc:"",val:v13,handle:handle13,},
  {type:3,hdg:"PRIMARY TAG",body:"Software Development<Customer Support<Sales<Marketing<Design<Front End<Back End<Legal<Testing<Quality Assurance<Non-Tech<Other",desc:"This primary tag shows first and increases visibility in the main sections. Your job is shown on every page that is tagged with though. E.g. if you tag it as PHP, it shows for Remote PHP Jobs etc.",val:v14,handle:handle14,},
  {type:4,hdg:"TAGS, KEYWORDS OR STACK*",body:`[${out.slice(0, -1)}]`,desc:`Short tags are preferred. Use tags like industry and tech stack. The first 3 or 4 tags are shown on the site, the other tags aren't but the job will be shown on each tag specific page (like /remote-react-jobs). We also sometimes generate tags automatically after you post/edit to supplement.`,settgs:settgs},
  {type:4,hdg:"JOB IS RESTRICTED TO LOCATIONS?",body:`[${out1.slice(0, -1)}]`,desc:`If you'd only like to hire people from a specific location or timezone this remote job is restricted to (e.g. Europe, United States or Japan). If not restricted, please leave it as "Worldwide". The less restricted this is, the more applicants you will get. Keeping it "Worldwide" is highly recommended as you'll have access to a worldwide pool of talent. To promote fairness in remote work positions, worldwide jobs are ranked higher.`,settgs:settgs1},

],
}
const f2={lbl:"COMPANY",
  fields:[{type:1,hdg:"COMPANY TWITTER",body:"Sample",desc:"Twitter username without @. Not required, but used to tag your company when we tweet out your job post",val:v21,handle:handle21,}
  ,{type:1,hdg:"COMPANY EMAIL* (STAYS PRIVATE, FOR INVOICE + EDIT LINK)",body:"",desc:`Make sure this email is accessible by you! We use this to send the invoice and edit link. We can not and do not manually resend it! If you use your company domain (same as company name), we will show a [ Verified ] tag on your job post.`,val:v22,handle:handle22,},
  {type:1,hdg:"INVOICE EMAIL (STAYS PRIVATE)",body:"",desc:`We send a copy of the invoice and edit link to here too. You can write your finance department or accountant expenses email here so they get a copy of the invoice for your bookkeeping.`,val:v23,handle:handle23,},
  {type:2,hdg:"INVOICE ADDRESS*",body:"",desc:"Specify your company address here and we'll put it on your invoice for your bookkeeping. Be sure to [ Save changes ] in bottom right after editing your invoice address. Then it'll be instantly updated on the invoice.",val:v24,handle:handle24,},
  {type:1,hdg:"INVOICE NOTES / PO NUMBER",body:"",desc:" Not required. Add notes here that you'd like to see on the invoice/receipt such as a Purchase Order number or any other internal notes you need for reference. You can add or edit this later.",val:v25,handle:handle25,}

  ],
}
const f3={lbl:"FEEDBACK BOX",val:v31,handle:handle31,fields:[{type:2,hdg:"FEEDBACK ABOUT REMOTE OK",body:"",desc:"This isn't part of the job post. If you have any feature requests or general feedback about posting a job Remote OK, leave it here. Please be radically honest, I'm always improving the site and act on your feedback fast. It's most important that you're happy with the site and I want you to keep coming back to post here! This feedback box gets sent straight to my phone wherever I am. -Pieter Levels, Founder of Remote OK"}]}

  return (
    <main className="bg-base-100">
      <main className=" fixed bottom-0 z-10 left-[2.5%] w-full">
       <JobCard imgflg bdg cls="card glass" position={v12} company_name={v11} location_restriction="Faridabad" tags={tgs} created_at="5/17/2024 23:11:25"/></main>
       <NavBar endIcon={false} post={true}/>
       <Form title={f1.lbl} items={f1.fields}/>
       <Form title={f2.lbl} items={f2.fields}/>
       <Form title={f3.lbl} items={f3.fields}/>
       <div style={{height:"300px"}}></div>
     
    </main>
    
  );
}
