import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { states } from '../../../public/states'
import CIcon from '@coreui/icons-react'
import { cilPencil } from '@coreui/icons'
import {
  CButton,
  CCol,
  CForm,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
} from '@coreui/react'

function States() {
  const [visible, setVisible] = useState(false)
  const [selectedState, setSelectedState] = useState(null)
  const data = states
  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: 'Hindi',
      selector: (row) => row.hindi,
      sortable: true,
    },
    {
      name: 'Code',
      selector: (row) => row.short_code,
      sortable: true,
    },
    {
      name: 'Seats',
      selector: (row) => row.city_count,
      sortable: true,
    },
    {
      name: 'Edit',
      cell: (row) => (
        <CIcon
          icon={cilPencil}
          size="custom-size"
          height={20}
          width={20}
          onClick={() => {
            setSelectedState(row)
            setVisible(true)
          }}
          customClassName="nav-icon cursor-pointer"
        />
      ),
    },
  ]
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <div>
      <div className="d-flex justify-content-end pb-4">
        <CButton color="info" onClick={() => setVisible(true)}>
          Add State
        </CButton>
      </div>
      <DataTable columns={columns} data={data} />
      <CModal visible={visible} aria-labelledby="LiveDemoExampleLabel">
        <CModalHeader closeButton={false}>
          <CModalTitle id="LiveDemoExampleLabel">
            {selectedState ? 'Edit' : 'Add'} State
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm noValidate validated={validated} onSubmit={handleSubmit}>
            <CRow className="pb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  id="state"
                  label="State Name"
                  placeholder="Haryana"
                  feedbackInvalid="Please provide a valid state."
                  defaultValue={selectedState?.state ?? ''}
                  required
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  id="hindi"
                  label="Hindi State Name"
                  placeholder="हरियाणा"
                  feedbackInvalid="Please provide a valid hindi name"
                  defaultValue={selectedState?.hindi ?? ''}
                  required
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  id="code"
                  label="State Code"
                  placeholder="HR"
                  feedbackInvalid="Please provide a valid state code"
                  defaultValue={selectedState?.short_code ?? ''}
                  required
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  id="seats"
                  label="Seats"
                  placeholder="10"
                  feedbackInvalid="Please provide seats in the state"
                  defaultValue={selectedState?.city_count ?? ''}
                  required
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol md={8} />
              <CCol md={2}>
                <CButton
                  color="secondary"
                  onClick={() => {
                    setVisible(false)
                    setSelectedState(undefined)
                  }}
                >
                  Close
                </CButton>
              </CCol>
              <CCol md={2} className="d-flex justify-content-end">
                <CButton color="primary" type="submit">
                  Save
                </CButton>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
      </CModal>
    </div>
  )
}

export default States
