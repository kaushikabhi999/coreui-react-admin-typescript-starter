import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { parties } from '../../../public/parties'
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
import CIcon from '@coreui/icons-react'
import { cilPencil } from '@coreui/icons'

function Parties() {
  const [visible, setVisible] = useState(false)
  const [selectedParty, setSelectedParty] = useState(null)
  const data = parties
  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'Party Full Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Party Short Name',
      selector: (row) => row.short,
      sortable: true,
    },
    {
      name: 'Party Image',
      selector: (row) => row.image,
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
            setSelectedParty(row)
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
        <CButton color="primary" onClick={() => setVisible(true)}>
          Add Party
        </CButton>
      </div>
      <DataTable columns={columns} data={data} />
      <CModal visible={visible} aria-labelledby="LiveDemoExampleLabel">
        <CModalHeader closeButton={false}>
          <CModalTitle id="LiveDemoExampleLabel">
            {selectedParty ? 'Edit' : 'Add'} Party
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm noValidate validated={validated} onSubmit={handleSubmit}>
            <CRow className="pb-3">
              <CCol md={6}>
                <CFormInput
                  type="text"
                  id="state"
                  label="Party Name"
                  placeholder="Haryana"
                  feedbackInvalid="Please provide a valid party."
                  defaultValue={selectedParty?.state ?? ''}
                  required
                />
              </CCol>
              <CCol md={6}>
                <CFormInput
                  type="text"
                  id="hindi"
                  label="Party Short Name"
                  placeholder="हरियाणा"
                  feedbackInvalid="Please provide a valid Short name."
                  defaultValue={selectedParty?.hindi ?? ''}
                  required
                />
              </CCol>
              <CCol md={12}>
                <CFormInput
                  type="file"
                  id="code"
                  label="Party Image"
                  placeholder="Select Photo"
                  feedbackInvalid="Please provide a valid image"
                  defaultValue={selectedParty?.code ?? ''}
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
                    setSelectedParty(undefined)
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

export default Parties
