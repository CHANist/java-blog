"use strict";(self.webpackChunkjava_blog=self.webpackChunkjava_blog||[]).push([[185],{6e3:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={title:"3. Spring\u4e4b\u5e95\u5c42\u67b6\u6784\u6838\u5fc3\u6982\u5ff5\u89e3\u6790",tags:["Java","Spring","\u5716\u9748\u8ab2\u5802"]},p=void 0,s={unversionedId:"spring/bean_core_concept_analysis",id:"spring/bean_core_concept_analysis",isDocsHomePage:!1,title:"3. Spring\u4e4b\u5e95\u5c42\u67b6\u6784\u6838\u5fc3\u6982\u5ff5\u89e3\u6790",description:"\u8bfe\u7a0b\u5185\u5bb9",source:"@site/docs/spring/03-bean_core_concept_analysis.md",sourceDirName:"spring",slug:"/spring/bean_core_concept_analysis",permalink:"/spring/bean_core_concept_analysis",tags:[{label:"Java",permalink:"/tags/java"},{label:"Spring",permalink:"/tags/spring"},{label:"\u5716\u9748\u8ab2\u5802",permalink:"/tags/\u5716\u9748\u8ab2\u5802"}],version:"current",lastUpdatedAt:1634182496,formattedLastUpdatedAt:"10/14/2021",sidebarPosition:3,frontMatter:{title:"3. Spring\u4e4b\u5e95\u5c42\u67b6\u6784\u6838\u5fc3\u6982\u5ff5\u89e3\u6790",tags:["Java","Spring","\u5716\u9748\u8ab2\u5802"]},sidebar:"springSideBar",previous:{title:"2. \u624b\u5199\u6a21\u62dfSpring\u5e95\u5c42\u539f\u7406",permalink:"/spring/handwriting_simple_spring"},next:{title:"4. Spring Bean Lifecycle Source Code Analysis\uff081\uff09",permalink:"/spring/bean_lifecycle_1"}},c=[{value:"Spring Basic Usage and Bean Definition",id:"spring-basic-usage-and-bean-definition",children:[]},{value:"BeanDefinitionReader and BeanDefinitionScanner",id:"beandefinitionreader-and-beandefinitionscanner",children:[]},{value:"BeanFactory and ApplicationContext",id:"beanfactory-and-applicationcontext",children:[]}],u={toc:c};function m(e){var n=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bfe\u7a0b\u5185\u5bb9"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"BeanDefinition\u4ee5\u53caBeanDefinitionReader"),(0,r.kt)("li",{parentName:"ol"},"BeanFactory\u4e0eApplicationContext"),(0,r.kt)("li",{parentName:"ol"},"Spring\u4e2d\u7684\u7c7b\u578b\u8f6c\u5316\u7ec4\u4ef6"),(0,r.kt)("li",{parentName:"ol"},"Spring\u4e2d\u7684\u6bd4\u8f83\u5668OrderComparator"),(0,r.kt)("li",{parentName:"ol"},"BeanPostProcessor\u4e0eBeanFactoryPostProcessor"),(0,r.kt)("li",{parentName:"ol"},"Spring\u4e2d\u7279\u6b8a\u7684Bean\u4e4bFactoryBean"),(0,r.kt)("li",{parentName:"ol"},"ExcludeFilter\u548cIncludeFilter"),(0,r.kt)("li",{parentName:"ol"},"Spring\u4e2d\u7c7b\u5143\u6570\u636e\u8bfb\u53d6\u5668\u4e4bMetadataReader"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"spring-basic-usage-and-bean-definition"},"Spring Basic Usage and Bean Definition"),(0,r.kt)("p",null,"Spring provides a number of different ways for developer to specify how Spring should create a Spring Bean. For example, XML, Annotation or Programmatic one. "),(0,r.kt)("p",null,"Ways to specify Bean: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"XML "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'<bean id="userService" class="com.thechanist.tuling.spring.ch03.services.UserService" init-method="xxx" lazy-init="true" />\n')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring.xml");\n\nUserService userService = (UserService) applicationContext.getBean("userService");\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Annotation 1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@ComponentScan("com.thechanist")\npublic class AppConfig {\n    @Bean\n    public UserService userService() {\n        return new UserService(); \n    }\n}\n')))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ApplicationContext applicationContext = new AnnotationConfigApplicationContext(AppConfig.class);\n\nUserService userService = (UserService) applicationContext.getBean("userService");\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Annotation 2"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package com.thechanist.tuling.spring.ch03;\n\n@Component\npublic class UserService {\n    \n}\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ApplicationContext applicationContext = new AnnotationConfigApplicationContext("com.thechanist");\n\nUserService userService = (UserService) applicationContext.getBean("userService");\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Programmatic"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);\n\n// define bean\nAbstractBeanDefinition beanDefinition = BeanDefinitionBuilder.genericBeanDefinition().getBeanDefinition();\nbeanDefinition.setBeanClass(UserService.class);\nbeanDefinition.setScope("prototype")\n    \n// register the bean into ApplicationContext (beanName, beanDefinition)\ncontext.registerBeanDefinition("userService", beanDefinition);\n\nUserService userService = (UserService) context.getBean("userService");\n')),(0,r.kt)("p",{parentName:"li"},"Indeed developers seldom create Spring bean using Programmtic Approach. This is used internally for Spring to convert declarative bean (be it XML / Annotation or others) to a real Spring bean. So it will be very useful if you would like to understand how Spring works behind the scene. "))),(0,r.kt)("p",null,"To create Spring Bean, Spring actually define an interface, namely ",(0,r.kt)("inlineCode",{parentName:"p"},"BeanDefinition"),", which it first convert the declarative information (be it XML / Annotation) to BeanDefinition first, then to Spring bean.\nTherefore by inspecting what methods BeanDefinition inlude, one may have a brief idea on what Spring Bean supports. "),(0,r.kt)("p",null,"Here list some of the fields (getter / setters) specified in BeanDefinition interface, which is extracted from Spring 5.3.9. "),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"parentName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"beanClassName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"scope ",'["singleton", prototype", ...]'," "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"isSingleton"),(0,r.kt)("li",{parentName:"ul"},"isPrototype"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"dependsOn ","[name of beans which this bean depends on]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"factoryBeanName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"factoryMethodName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"constructorArgumentValues")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"propertyValues")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"initMethodName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"destroyMethodName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"role")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"description")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"resolvableType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"resourceDescription")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"originatingBeanDefinition"))),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"isAutowireCandidate ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"isLazyInit ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"isAbstract")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"beandefinitionreader-and-beandefinitionscanner"},"BeanDefinitionReader and BeanDefinitionScanner"),(0,r.kt)("p",null,"If you have a look at the source code of Spring, you would find that Spring ApplicationContext delegates a lot of functionality to other classes. "),(0,r.kt)("p",null,"Some of the class includes ",(0,r.kt)("inlineCode",{parentName:"p"},"ClassPathBeanDefinitionScanner"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"XmlBeanDefinitionReader")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AnnotationBeanDefinitionReader"),"."),(0,r.kt)("p",null,"For example, "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ApplicationContext applicationContext = new AnnotationConfigApplicationContext("com.thechanist");\n\nUserService userService = (UserService) applicationContext.getBean("userService");\n')),(0,r.kt)("p",{parentName:"li"},"will be equivalent to the followings"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext();\n\nAnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext();\napplicationContext.refresh();\n\n// register the UserService before calling\nClassPathBeanDefinitionScanner scanner = new ClassPathBeanDefinitionScanner(applicationContext);\nscanner.scan("com.thechanist");\n\nUserService userService = (UserService) applicationContext.getBean("userService");\n')))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring.xml");\n\nUserService userService = (UserService) applicationContext.getBean("userService");\n')),(0,r.kt)("p",{parentName:"li"},"will be equivalent to the followings"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext();\napplicationContext.refresh();\n\nXmlBeanDefinitionReader reader = new XmlBeanDefinitionReader(applicationContext);\nreader.loadBeanDefinitions("spring.xml");\n\nUserService userService = (UserService) applicationContext.getBean("userService");\n')),(0,r.kt)("p",{parentName:"li"},"and "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext();\napplicationContext.refresh();\n\nXmlBeanDefinitionReader reader = new XmlBeanDefinitionReader((DefaultListableBeanFactory) applicationContext.getBeanFactory());\nreader.loadBeanDefinitions("spring.xml");\n\nUserService userService = (UserService) applicationContext.getBean("userService");\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ApplicationContext applicationContext = new AnnotationConfigApplicationContext(UserService.class);\n\nUserService userService = (UserService) applicationContext.getBean("userService");\n')),(0,r.kt)("p",{parentName:"li"},"will be equivalent to the followings"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();\n\nAnnotationBeanDefinitionReader annotationBeanDefinitionReader = new AnnotationBeanDefinitionReader(context);\n// analysis User.class and create a BeanDefinition\nannotationBeanDefinitionReader.register(UserService.class);\n\nUserService userService = (UserService) applicationContext.getBean("userService");\n')))),(0,r.kt)("p",null,"Note that the following does not work"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();\n\nAnnotationBeanDefinitionReader annotationBeanDefinitionReader = new AnnotationBeanDefinitionReader(context);\n\n// analysis User.class and create a BeanDefinition\nannotationBeanDefinitionReader.register(AppConfig.class);\n\nUserService userService = (UserService) applicationContext.getBean("userService");\n')),(0,r.kt)("p",null,"while the below works properly"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);\n\nUserService userService = (UserService) applicationContext.getBean("userService");\n')),(0,r.kt)("p",null,"We will explore why it does not work as expected later, and how can we change the code, to make it work properly. "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"beanfactory-and-applicationcontext"},"BeanFactory and ApplicationContext"),(0,r.kt)("p",null,"To create a Spring bean, Spring uses BeanFactory to create Spring bean. And BeanFactory, instead of being a normal concrete class, it is an interface, while ApplicationContext is an implementation of such interface. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public interface BeanFactory {\n\n    String FACTORY_BEAN_PREFIX = "&";\n\n    Object getBean(String name) throws BeansException;\n\n    <T> T getBean(String name, Class<T> requiredType) throws BeansException;\n\n    Object getBean(String name, Object... args) throws BeansException;\n\n    <T> T getBean(Class<T> requiredType) throws BeansException;\n\n    <T> T getBean(Class<T> requiredType, Object... args) throws BeansException;\n\n    <T> ObjectProvider<T> getBeanProvider(Class<T> requiredType);\n\n    <T> ObjectProvider<T> getBeanProvider(ResolvableType requiredType);\n\n    boolean containsBean(String name);\n\n    boolean isSingleton(String name) throws NoSuchBeanDefinitionException;\n\n    boolean isPrototype(String name) throws NoSuchBeanDefinitionException;\n\n    boolean isTypeMatch(String name, ResolvableType typeToMatch) throws NoSuchBeanDefinitionException;\n\n    boolean isTypeMatch(String name, Class<?> typeToMatch) throws NoSuchBeanDefinitionException;\n\n    @Nullable\n    Class<?> getType(String name) throws NoSuchBeanDefinitionException;\n\n    @Nullable\n    Class<?> getType(String name, boolean allowFactoryBeanInit) throws NoSuchBeanDefinitionException;\n\n    String[] getAliases(String name);\n\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public interface ApplicationContext extends EnvironmentCapable, ListableBeanFactory, HierarchicalBeanFactory,\n        MessageSource, ApplicationEventPublisher, ResourcePatternResolver {\n    // ...\n}\n")),(0,r.kt)("p",null,"and both ",(0,r.kt)("inlineCode",{parentName:"p"},"ListableBeanFactory")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HierarchicalBeanFactory")," extends ",(0,r.kt)("inlineCode",{parentName:"p"},"BeanFactory"),", which signals an ApplicationContext is also a BeanFactory, but processes other capabilties as well. "),(0,r.kt)("p",null,"Let's review each of the additional features ApplicationContext supports. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EnvironmentCapable: retrieve environment variable"),(0,r.kt)("li",{parentName:"ul"},"MessageSource: for internationalisation (i18n)"),(0,r.kt)("li",{parentName:"ul"},"ApplicationEventPublisher: use for event publishing"),(0,r.kt)("li",{parentName:"ul"},"ResourcePatternResolver: Resource Loaders, used to retrieve multiple resources at the same time")),(0,r.kt)("p",null,"ApplicationContext implements BeanFactory, by delegating the responsiblity to ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultListableBeanFactory"),", as can be seen from below source code. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class AnnotationConfigApplicationContext extends GenericApplicationContext implements AnnotationConfigRegistry {\n    public AnnotationConfigApplicationContext() {\n        // which by default, will call noargs super() if the parent constructor is accessible\n        // see https://stackoverflow.com/questions/2054022/is-it-unnecessary-to-put-super-in-constructor\n        StartupStep createAnnotatedBeanDefReader = this.getApplicationStartup().start("spring.context.annotated-bean-reader.create");\n        this.reader = new AnnotatedBeanDefinitionReader(this);\n        createAnnotatedBeanDefReader.end();\n        this.scanner = new ClassPathBeanDefinitionScanner(this);\n    }\n    \n    public AnnotationConfigApplicationContext(String... basePackages) {\n        this();\n        scan(basePackages);\n        refresh();\n    }\n}\n\npublic class GenericApplicationContext extends AbstractApplicationContext implements BeanDefinitionRegistry {\n    private final DefaultListableBeanFactory beanFactory;\n    \n    public GenericApplicationContext() {\n        this.beanFactory = new DefaultListableBeanFactory();\n    }\n    \n    @Override\n    public final ConfigurableListableBeanFactory getBeanFactory() {\n        return this.beanFactory;\n    }\n}\n\npublic abstract class AbstractApplicationContext extends DefaultResourceLoader implements ConfigurableApplicationContext {\n    @Override\n    public Object getBean(String name) throws BeansException {\n        return getBeanFactory().getBean(name);\n    }\n    \n    // ...\n}\n')),(0,r.kt)("p",null,"Indeed DefaultListableBeanFactory is a very powerful class, supporting lots of functionality. Below lists a class diagram showing the inheritance relationship. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"defaultlistablebeanfactory_class_hierarchy",src:t(5101).Z})),(0,r.kt)("p",null,"Here lists some of the functionality it processes: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"AliasRegistry"),(0,r.kt)("li",{parentName:"ol"})),(0,r.kt)("p",null,"Therefore one can also register bean using DefaultListableBeanFactory. Here is an example. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'DefaultListableBeanFactory beanFactory = new DefaultListableBeanFactory();\n// same as programatic argument one\nAbstractBeanDefinition beanDefinition = BeanDefinitionBuilder.genericBeanDefinition().getBeanDefinition();\nbeanDefinition.setBeanClass(UserService.class);\nbeanFactory.registerBeanDefinition("userService", beanDefinition);\n\nUserService bean = beanFactory.getBean(UserService.class);\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"30:00:00"),(0,r.kt)("p",null,"\u7236\u5b50\u5175\u5de5\u5ee0 - Spring MVC \u6709\u7528"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"ASM"),(0,r.kt)("p",null,"FactoryBean vs @Bean"))}m.isMDXComponent=!0},5101:function(e,n,t){n.Z=t.p+"assets/images/defaultlistablebeanfactory_class_hierarchy-f94f3cca3834ede60a721b20e3c6ee01.png"}}]);