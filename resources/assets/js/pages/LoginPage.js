import React, { Component } from 'react';
import { Form, Text } from 'react-form';

class LoginPage extends Component {

    handleSubmit(event) {
        console.log('Example')
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Login</div>
                            <div className="panel-body">
                                <Form>
                                    { formApi => (
                                        <form className="form-horizontal">
                                            <div className="form-group">
                                                <label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>
                                                <div className="col-md-6">
                                                    <Text field="email" id="email" type="email" className="form-control" name="email" required autoFocus />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password" className="col-md-4 control-label">Password</label>
                                                <div className="col-md-6">
                                                    <Text field="password" id="password" type="password" className="form-control" name="email" required autoFocus />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-6 col-md-offset-4">
                                                    <div className="checkbox">
                                                        <label>
                                                            <Text type="checkbox" name="remember" /> Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-md-8 col-md-offset-4">
                                                    <button type="submit" className="btn btn-primary">
                                                        Login
                                                    </button>

                                                    <a className="btn btn-link" href="/">
                                                        Forgot Your Password?
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default LoginPage;