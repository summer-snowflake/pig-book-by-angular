angular.module 'newAccountBook'
  .config ($logProvider, toastrConfig, $translateProvider) ->
    'ngInject'
    # Enable log
    $logProvider.debugEnabled true
    # Set options third-party lib
    toastrConfig.allowHtml = true
    toastrConfig.timeOut = 3000
    toastrConfig.positionClass = 'toast-top-center'
    toastrConfig.preventDuplicates = false
    toastrConfig.progressBar = false

    # Internationalization
    $translateProvider.useStaticFilesLoader
      prefix: 'assets/i18n/locale-',
      suffix: '.json'
    $translateProvider.preferredLanguage('ja')
    $translateProvider.fallbackLanguage('en')
    $translateProvider.useMissingTranslationHandlerLog()
    $translateProvider.useLocalStorage()
    $translateProvider.useSanitizeValueStrategy('escaped')