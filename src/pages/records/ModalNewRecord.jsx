import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import InputPriceField from '../../components/InputPriceField'

function ModalNewRecord({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    variety: '',
    notes: '',
    date_planted: '',
    seedling_count: '',
    batch_name: '',
    starting_fund: '',
    seedling_source: ''
  })
  const plantVarieties = [
    "Vegetables",
    "Leafy Greens",
    "Root Crops",
    "Herbs",
    "Fruits",
    "Legumes",
    "Spices",
    "Mushrooms",
    "Ornamentals",
    "Medicinal Plants",
    "Vines",
    "Fruit Trees",
    "Other",
    "Unknown",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData);
    setFormData({
      name: '',
      variety: '',
      notes: '',
      date_planted: '',
      seedling_count: '',
      batch_name: '',
      starting_fund: '',
      seedling_source: ''
    });
  }

  const handleClose = () => {
    // Reset form when closing
    setFormData({
      name: '',
      variety: '',
      notes: '',
      date_planted: '',
      quantity: '',
      batch_name: '',
      starting_fund: '',
      seedling_source: ''
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Add New Plant</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Row 1: Name and Variety */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Plant name"
                value={formData.name || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="variety" className="block text-sm font-medium text-gray-700 mb-1">
                Variety
              </label>
              <select
                id="variety"
                name="variety"
                value={formData.variety || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="">Select variety</option>
                {plantVarieties.map((variety) => (
                  <option key={variety} value={variety}>
                    {variety}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2: Batch Name and Seedling Count */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="batch_name" className="block text-sm font-medium text-gray-700 mb-1">
                Batch Name
              </label>
              <input
                type="text"
                id="batch_name"
                name="batch_name"
                placeholder="Batch name"
                value={formData.batch_name || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="seedling_count" className="block text-sm font-medium text-gray-700 mb-1">
                Seedling Count
              </label>
              <input
                type="text"
                id="seedling_count"
                name="seedling_count"
                placeholder="Number of seedlings"
                value={formData.seedling_count || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Row 3: Seedling Source and Date Planted */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="seedling_source" className="block text-sm font-medium text-gray-700 mb-1">
                Seedling Source
              </label>
              <input
                type="text"
                id="seedling_source"
                name="seedling_source"
                placeholder="Source of seedlings"
                value={formData.seedling_source || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="date_planted" className="block text-sm font-medium text-gray-700 mb-1">
                Date Planted
              </label>
              <input
                type="date"
                id="date_planted"
                name="date_planted"
                value={formData.date_planted || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Row 4: Starting Fund */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="starting_fund" className="block text-sm font-medium text-gray-700 mb-1">
                Starting Fund
              </label>
              <InputPriceField
                id="starting_fund"
                name="starting_fund"
                placeholder="Enter amount"
                formData={formData}
                setFormData={setFormData}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              placeholder="Additional notes"
              value={formData.notes || ''}
              onChange={handleChange}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 justify-end pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Add Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalNewRecord
