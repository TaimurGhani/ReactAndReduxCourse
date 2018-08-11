/* @flow */

import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
      const { email, password } = this.props;
      this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (

        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

renderButtonOrLoad() {
  if (this.props.loading) {
    return (
        <ActivityIndicator
          style={{ paddingTop: 10, paddingBottom: 10 }}
          size="large"
          color="#0000ff"
        />
    );
  }
  return (
    <CardSection>
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    </CardSection>
  );
}

  render() {
    return (
        <Card>
          <CardSection>
            <Input
              placeholder="email@gmail.com"
              label="Email"
              value={this.props.email}
              onChangeText={this.onEmailChange.bind(this)}
            />
          </CardSection>

          <CardSection>
            <Input
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
              placeholder="password"
              label="Password"
              secureTextEntry
            />
          </CardSection>

          {this.renderError()}

          {this.renderButtonOrLoad()}
        </Card>
    );
  }
}

const mapStateToProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  });

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});
