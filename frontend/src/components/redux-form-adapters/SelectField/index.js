import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Form, Label } from 'semantic-ui-react';


class SelectField extends Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired,
    placeholder: PropTypes.string,
    firstSelected: PropTypes.bool,
    label: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    search: PropTypes.bool,
  };

  static defaultProps = {
    firstSelected: false,
    label: null,
    placeholder: null,
    loading: false,
    disabled: false,
    search: false,
  };

  componentDidMount() {
    if (
      this.props.firstSelected &&
      (this.props.options && this.props.options.length > 0) &&
      !this.props.input.value
    ) {
      this.props.input.onChange(this.props.options[0].value);
    }
  }

  render() {
    const {
      input,
      label,
      options,
      placeholder,
      loading,
      disabled,
      search,
      meta: { touched, error },
    } = this.props;

    if (!('id' in input)) {
      input.id = `id_${input.name}`;
    }

    return (
      <Form.Field error={Boolean(touched && error)}>
        {label &&
          <label htmlFor={input.id}>{label}</label>
        }
        <Dropdown
          {...input}
          search={search || null}
          selection
          options={options}
          placeholder={placeholder}
          label={label || null}
          value={input.value}
          onChange={(param, data) => input.onChange(data.value)}
          loading={loading || null}
          disabled={disabled}
        />
        {touched && error &&
          <Label
            color={'red'}
            pointing
          >
            {error}
          </Label>
        }
      </Form.Field>
    );
  }
}

export default SelectField;
