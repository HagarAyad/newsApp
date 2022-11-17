import React from 'react';
import {View, Text, TouchableOpacity, I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';
//--
import i18n, {getCurrentLocale, setLocale} from '~locals';
//--
import {styles} from './styles';

const ARABIC_lANG = 'ar';
const ENGLISH_lANG = 'en';

const langs = [ARABIC_lANG, ENGLISH_lANG];

const Settings = () => {
  console.log(getCurrentLocale());

  const onChangeAppLang = () => {
    if (getCurrentLocale() === ARABIC_lANG) {
      setLocale(ENGLISH_lANG);
      I18nManager.forceRTL(false);
      I18nManager.allowRTL(false);
    } else {
      setLocale(ARABIC_lANG);
      I18nManager.forceRTL(true);
      I18nManager.allowRTL(true);
    }
    RNRestart.Restart();
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{i18n.t('language')} </Text>
        {langs.map(lang => {
          return (
            <TouchableOpacity
              style={styles.langContainer}
              key={lang}
              onPress={onChangeAppLang}>
              {getCurrentLocale() === lang && <View style={styles.circle} />}

              <Text>{i18n.t(lang)}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Settings;
