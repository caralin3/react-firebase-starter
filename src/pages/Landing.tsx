import * as React from 'react';
import { LoginForm, SignUpForm } from '../components';

interface LandingPageProps {}

interface LandingPageState {
  login: boolean;
}

export class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
  public readonly state: LandingPageState = {
    login: true
  }

  public render() {
    const { login } = this.state;

    return (
      <div>
        {login ? <LoginForm /> :
        <SignUpForm />}
        {login ? <div>
          Don't have an account? | <span onClick={() => this.setState({login: false})}>Sign Up</span>
        </div> : <div>
          Already have an account? | <span onClick={() => this.setState({login: true})}>Login</span>
        </div>}
      </div>
    )
  }
}
