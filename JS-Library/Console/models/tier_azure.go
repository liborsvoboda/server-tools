// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// TierAzure tier azure
//
// swagger:model tier_azure
type TierAzure struct {

	// accountkey
	Accountkey string `json:"accountkey,omitempty"`

	// accountname
	Accountname string `json:"accountname,omitempty"`

	// bucket
	Bucket string `json:"bucket,omitempty"`

	// endpoint
	Endpoint string `json:"endpoint,omitempty"`

	// name
	Name string `json:"name,omitempty"`

	// objects
	Objects string `json:"objects,omitempty"`

	// prefix
	Prefix string `json:"prefix,omitempty"`

	// region
	Region string `json:"region,omitempty"`

	// usage
	Usage string `json:"usage,omitempty"`

	// versions
	Versions string `json:"versions,omitempty"`
}

// Validate validates this tier azure
func (m *TierAzure) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this tier azure based on context it is used
func (m *TierAzure) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *TierAzure) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *TierAzure) UnmarshalBinary(b []byte) error {
	var res TierAzure
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}